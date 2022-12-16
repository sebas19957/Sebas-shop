import type { NextPage } from 'next';
import { Typography } from '@mui/material';

import { useProducts } from '../hooks/useProducts';

import { ShopLayout } from '../components/layouts';
import { ProductList } from '../components/products';
import { FullScreenLoading } from '../components/ui';

const HomePage: NextPage = () => {

  const { products, isLoading, error } = useProducts('/products')

  return (
    <ShopLayout title={'Sebas-Shop - Home'} pageDescription={'Encuentra los mejores productos de Sebas-shop aquí'}>
      <Typography variant='h1' component='h1'>Tienda</Typography>
      <Typography variant='h2' sx={{ mb: 1 }}>Todos los productos</Typography>

      {
        isLoading
          ? <FullScreenLoading />
          : <ProductList products={products} />
      }
    </ShopLayout>
  )
}

export default HomePage
