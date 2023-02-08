import { GetServerSideProps, NextPage } from 'next'
import NextLink from 'next/link';
import { getSession } from 'next-auth/react';

import dayjs from 'dayjs';
import { Typography, Grid, Chip, Button } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

import { ShopLayout } from '../../components/layouts';
import { dbOrders } from '../../database';
import { IOrder } from '../../interfaces';
import { currency } from '../../utils';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', headerAlign: 'center', align: 'center', width: 100 },
  { field: 'date', headerName: 'Fecha', headerAlign: 'center', align: 'center', width: 200 },
  { field: 'fullname', headerName: 'Nombre Completo', headerAlign: 'center', align: 'center', width: 300 },
  { field: 'numberOfItems', headerName: 'Nro. Productos', headerAlign: 'center', align: 'center', width: 150 },
  {
    field: 'paid',
    headerName: 'Estado',
    description: 'Muestra información si está pagada la orden o no',
    headerAlign: 'center',
    align: 'center',
    width: 200,
    renderCell: params => {
      return (
        params.row.paid
          ? <Chip color="success" label="Pagada" variant='outlined' />
          : <Chip color="error" label="No pagada" variant='outlined' />
      )
    }
  },
  { field: 'total', headerName: 'Total', headerAlign: 'center', align: 'center', width: 150 },
  {
    field: 'orden',
    headerName: 'Acciones',
    headerAlign: 'center',
    align: 'center',
    width: 150,
    sortable: false,
    renderCell: params => {
      return (
        <NextLink href={`/orders/${params.row.orderId}`} passHref style={{ textDecoration: 'none' }}>
          <Button variant='contained' color='primary'>
            Ver orden
          </Button>
        </NextLink>
      )
    }
  }
];

interface Props {
  orders: IOrder[]
}

const HistoryPage: NextPage<Props> = ({ orders }) => {

  const rows = orders.map((order, index) => ({
    id: index + 1,
    date: dayjs(new Date(order.createdAt!)).format(
      "DD/MM/YYYY HH:mm:ss"
    ),
    numberOfItems: order.numberOfItems,
    total: currency.format(order.total),
    paid: order.isPaid,
    fullname: `${order.shippingAddress.firstName} ${order.shippingAddress.lastName}`,
    orderId: order._id!
  }))

  rows.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <ShopLayout title={'Historial de ordenes'} pageDescription={'Historial de ordenes del cliente'}>
      <Typography variant='h1' component='h1' sx={{ mb: 1 }}>Historial de ordenes</Typography>

      <Grid container className='fadeIn'>
        <Grid item xs={12} sx={{ height: 650, width: '100%' }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[10]}
            sx={{
              "& .MuiDataGrid-cell:focus-within": {
                outline: 'transparent !important'
              },
              "& .MuiDataGrid-columnSeparator": {
                display: 'none'
              },
              "& .MuiDataGrid-footerContainer .MuiDataGrid-selectedRowCount": {
                display: 'none'
              },
              "& .MuiDataGrid-footerContainer": {
                justifyContent: 'flex-end'
              },
            }}
          />

        </Grid>
      </Grid>

    </ShopLayout>
  )
}

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time

export const getServerSideProps: GetServerSideProps = async ({ req }) => {

  const session: any = await getSession({ req });

  if (!session) {
    return {
      redirect: {
        destination: '/auth/login?p=/orders/history',
        permanent: false,
      }
    }
  }

  const orders = await dbOrders.getOrdersByUser(session.user._id);

  return {
    props: {
      orders
    }
  }
}

export default HistoryPage