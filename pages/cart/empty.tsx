import NextLink from 'next/link';

import { RemoveShoppingCartOutlined } from "@mui/icons-material"
import { Box, Button, Link, Typography } from "@mui/material"
import { ShopLayout } from "../../components/layouts"


const EmptyPage = () => {
  return (
    <ShopLayout title="Carrito vació" pageDescription="No hay artículos en el carrito de compras">
      <Box
        display='flex'
        justifyContent='center'
        alignItems='center'
        height='calc(100vh - 200px)'
        sx={{ flexDirection: { xs: 'column', sm: 'row' } }}
      >
        <RemoveShoppingCartOutlined sx={{ fontSize: 100 }} />
        <Box display='flex' flexDirection='column' alignItems='center'>
          <Typography sx={{ fontSize: 20 }}>Su carrito está vació</Typography>
          <NextLink href='/' passHref legacyBehavior>
            <Button variant='contained' color='primary' size='large' sx={{ mt: 1 }}>
              Regresar
            </Button>
          </NextLink>
        </Box>


      </Box>
    </ShopLayout>
  )
}

export default EmptyPage