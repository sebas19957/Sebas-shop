import { useState } from 'react';
import { GetServerSideProps, NextPage } from 'next';
import { getSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { PayPalButtons } from "@paypal/react-paypal-js";

import { Box, Card, CardContent, Divider, Grid, Typography, Chip, CircularProgress } from '@mui/material';
import { CreditCardOffOutlined, CreditScoreOutlined } from '@mui/icons-material';

import { ShopLayout } from '../../components/layouts/ShopLayout';
import { CartList, OrderSummary } from '../../components/cart';
import { dbOrders } from '../../database';
import { IOrder } from '../../interfaces';
import { shopApi } from '../../api';

export type OrderResponseBody = {
  id: string;
  status:
  | "COMPLETED"
  | "SAVED"
  | "APPROVED"
  | "VOIDED"
  | "PAYER_ACTION_REQUIRED";
}

interface Props {
  order: IOrder;
}

const OrderPage: NextPage<Props> = ({ order }) => {

  // TODO: realizar lógica para no tener que recargar la pagina

  const router = useRouter();
  const { shippingAddress } = order;
  const [isPaying, setIsPaying] = useState(false);

  const onOrderCompleted = async (details: OrderResponseBody) => {
    if (details.status !== 'COMPLETED') {
      return alert('No hay pagos en Paypal');
    }

    setIsPaying(true);

    try {
      const { data } = await shopApi.post(`/orders/pay`, {
        transactionId: details.id,
        orderId: order._id
      })

      router.reload();

    } catch (error) {
      setIsPaying(false);
      console.log(error);
      alert('Error');
    }
  }

  return (
    <ShopLayout title='Resumen de la orden' pageDescription={'Resumen de la orden'}>
      <Typography variant='h1' component='h1'>Orden: {order._id}</Typography>

      {
        order.isPaid ? (
          <Chip
            sx={{ my: 2 }}
            label="Orden pagada"
            variant='outlined'
            color="success"
            icon={<CreditScoreOutlined />}
          />
        ) : (
          <Chip
            sx={{ my: 2 }}
            label="Pendiente de pago"
            variant='outlined'
            color="error"
            icon={<CreditCardOffOutlined />}
          />
        )
      }

      <Grid container className='fadeIn'>
        <Grid item xs={12} sm={7}>
          <CartList products={order.orderItems} />
        </Grid>
        <Grid item xs={12} sm={5}>
          <Card className='summary-card'>
            <CardContent>
              <Typography variant='h2'>
                Resumen ({order.numberOfItems} {order.numberOfItems > 1 ? 'productos' : 'producto'})
              </Typography>
              <Divider sx={{ my: 1 }} />

              <Typography>
                {shippingAddress.firstName} {shippingAddress.lastName}
              </Typography>
              <Typography>
                {shippingAddress.address} {shippingAddress.address2 ? `, ${shippingAddress.address2}` : ''}
              </Typography>
              <Typography>
                {shippingAddress.city}, {shippingAddress.zip}
              </Typography>
              <Typography>{shippingAddress.country}</Typography>
              <Typography>{shippingAddress.phone}</Typography>

              <Divider sx={{ my: 1 }} />

              <OrderSummary
                numberOfItemsOrder={order.numberOfItems}
                subTotalOrder={order.subTotal}
                totalOrder={order.total}
                taxOrder={order.tax}
              />

              <Box display='flex' flexDirection='column'>

                <Box
                  display='flex'
                  justifyContent='center'
                  className='fadeIn'
                  sx={{ display: isPaying ? 'flex' : 'none' }}
                >

                  <CircularProgress />
                </Box>

                <Box sx={{ display: isPaying ? 'none' : 'flex', flex: 1 }} flexDirection='column'>
                  {
                    order.isPaid ? (
                      <Chip
                        sx={{ my: 2 }}
                        label="Orden pagada"
                        variant='outlined'
                        color="success"
                        icon={<CreditScoreOutlined />}
                      />
                    ) : (
                      <Box sx={{ mt: 3 }}>
                        <PayPalButtons
                          createOrder={(data, actions) => {
                            return actions.order.create({
                              purchase_units: [
                                {
                                  amount: {
                                    value: `${order.total}`,
                                  },
                                },
                              ],
                            });
                          }}
                          onApprove={(data, actions) => {
                            return actions.order!.capture().then((details) => {
                              onOrderCompleted(details);
                              const name = details.payer.name!.given_name;
                            });
                          }}
                        />
                      </Box>
                    )
                  }
                </Box>
              </Box>

            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </ShopLayout>
  )
}

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time
export const getServerSideProps: GetServerSideProps = async ({ req, query }) => {

  const { id = '' } = query;
  const session: any = await getSession({ req });

  if (!session) {
    return {
      redirect: {
        destination: `/auth/login?p=/orders/${id}`,
        permanent: false,
      }
    }
  }

  const order = await dbOrders.getOrderById(id.toString());

  if (!order) {
    return {
      redirect: {
        destination: '/orders/history',
        permanent: false,
      }
    }
  }

  if (order.user !== session.user._id) {
    return {
      redirect: {
        destination: '/orders/history',
        permanent: false,
      }
    }
  }

  return {
    props: {
      order
    }
  }
}

export default OrderPage;