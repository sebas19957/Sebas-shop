import React from 'react';
import Image from 'next/image';
import { Box, Typography } from '@mui/material';

import NotFound from './../../../public/imgs/no_data.svg';


const NotFoundOverlay = () => {
  return (
    <Box
      display='flex'
      justifyContent='center'
      alignItems='center'
      sx={{ flexDirection: { xs: 'column', sm: 'column' } }}
    >

      <Box sx={{ display: { xs: 'none', sm: 'block' }, mt: -10 }}>
        <Image src={NotFound} alt="Logo" width={500} height={500} />

        <Box >
          <Typography variant="h5" sx={{ mt: -12, textAlign: 'center' }}>
            ¡No se encontraron datos!
          </Typography>
        </Box>
      </Box>

      <Box sx={{ display: { xs: 'block', sm: 'none' }, mt: -8 }}>
        <Image src={NotFound} alt="Logo" width={350} height={350} />

        <Box >
          <Typography variant="h5" sx={{ mt: -10, textAlign: 'center' }}>
            ¡No se encontraron datos!
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default NotFoundOverlay;
