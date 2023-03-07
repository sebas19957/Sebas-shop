import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import { ShopLayout } from "../components/layouts";
import NotFound from './../public/imgs/404.svg';

const Custom404 = () => {
  return (
    <ShopLayout title='Page not found' pageDescription='No hay nada que mostrar aquí'>
      <Box
        display='flex'
        justifyContent='center'
        alignItems='center'
        height='calc(100vh - 200px)'
        sx={{ flexDirection: { xs: 'column', sm: 'row' } }}
      >
        <Box sx={{ display: { xs: 'none', sm: 'block' }, mt: -10 }}>
          <Image src={NotFound} alt="Logo" width={500} height={500} />
        </Box>

        <Box sx={{ display: { xs: 'block', sm: 'none' }, mt: -8 }}>
          <Image src={NotFound} alt="Logo" width={350} height={350} />
        </Box>

      </Box>
    </ShopLayout>
  )
}

export default Custom404;