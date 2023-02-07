import { FC, useContext } from 'react';
import NextLink from 'next/link';
import { Box, Button, CardActionArea, CardMedia, Grid, Link, Typography } from '@mui/material';

import { ItemCounter } from '../ui';
import { CartContext } from '../../context';
import { ICartProduct, IOrderItem } from '../../interfaces';

interface Props {
  editable?: boolean;
  products?: IOrderItem[]
}

export const CartList: FC<Props> = ({ editable = false, products }) => {

  const { cart, updateCartQuantity, deletedProduct } = useContext(CartContext);

  const onNewQuantityValue = (product: ICartProduct, newQuantityValue: number) => {
    product.quantity = newQuantityValue;
    updateCartQuantity(product)
  }

  const onDeleteProduct = (product: ICartProduct) => {
    deletedProduct(product)
  }

  const productsToShow = products ? products : cart

  return (
    <>
      {
        productsToShow.map((product, index) => (
          <Grid container spacing={2} key={product.slug + product.size} sx={{ mb: 1 }}>
            <Grid item xs={3}>
              {/* TODO: llevar a la página del producto */}
              <NextLink href={`/product/${product.slug}`} passHref legacyBehavior>
                <Link>
                  <CardActionArea>
                    <CardMedia
                      image={`/products/${product.image}`}
                      component='img'
                      sx={{ borderRadius: '5px' }}
                    />
                  </CardActionArea>
                </Link>
              </NextLink>
            </Grid>
            <Grid item xs={7}>
              <Box display='flex' flexDirection='column'>
                <Typography variant='body1'>{product.title}</Typography>
                <Typography variant='body1'>Talla: <strong>{product.size}</strong></Typography>
                {
                  editable
                    ? <ItemCounter
                      currentValue={product.quantity}
                      // TODO: mirar el stok para validar las contidades disponibles
                      maxValue={products ? product.quantity : cart[index].inStock}
                      // maxValue={5}
                      updatedQuantity={(value) => onNewQuantityValue(product as ICartProduct, value)}
                    />
                    : (
                      <Typography variant='subtitle1' >
                        {product.quantity} {product.quantity > 1 ? 'productos' : 'producto'}
                      </Typography>
                    )
                }
              </Box>
            </Grid>
            <Grid item xs={2} display='flex' alignItems='center' flexDirection='column'>
              <Typography variant='subtitle1'>{`$${product.price}`}</Typography>
              {
                editable && (
                  <Button
                    variant='text'
                    color='secondary'
                    onClick={() => onDeleteProduct(product as ICartProduct)}
                  >
                    Remover
                  </Button>
                )
              }
            </Grid>
          </Grid>
        ))
      }
    </>
  )
}
