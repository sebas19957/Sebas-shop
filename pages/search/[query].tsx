import { NextPage, GetServerSideProps } from 'next';
import { Box, Divider, Typography } from '@mui/material';

import { ShopLayout } from '../../components/layouts';
import { ProductList } from '../../components/products';

import { dbProducts } from '../../database';
import { IProduct } from '../../interfaces';

interface Props {
  products: IProduct[];
  foundProducts: boolean;
  query: string;
}

const SearchPage: NextPage<Props> = ({ products, foundProducts, query }) => {

  return (
    <ShopLayout title={'Sebas-Shop - Search'} pageDescription={'Encuentra los mejores productos de Sebas-shop aquí'}>
      <Typography variant='h1' component='h1'>Buscar producto</Typography>


      {
        foundProducts
          ? <Typography variant='h2' sx={{ mb: 1 }} textTransform='capitalize'>Término: {query}</Typography>
          : (
            <>
              <Box display='flex' sx={{ mb: 2, mt: 2 }}>
                <Typography variant='h2' sx={{ mb: 1 }}>No se encontro ningún producto</Typography>
                <Typography variant='h2' sx={{ ml: 1 }} color="secondary" textTransform='capitalize'>{query}</Typography>

              </Box>

              <Divider />
              <Typography variant='h2' sx={{ mt: 2, mb: 2 }}>Estos productos de pueden interesar</Typography>
            </>
          )
      }

      <ProductList products={products} />

    </ShopLayout>
  )
}


export const getServerSideProps: GetServerSideProps = async ({ params }) => {

  const { query = '' } = params as { query: string }

  if (query.length === 0) {
    return {
      redirect: {
        destination: '/',
        permanent: true
      }
    }
  }

  let products = await dbProducts.getProductByTerm(query);
  const foundProducts = products.length > 0;

  // TODO: retornar otros prosductos (cache si se tiene)
  if (!foundProducts) {
    products = await dbProducts.getProductByTerm('shirts');
  }

  return {
    props: {
      products,
      foundProducts,
      query
    }
  }
}

export default SearchPage
