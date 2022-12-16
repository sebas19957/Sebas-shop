import { Box, CircularProgress, Typography } from '@mui/material'
import React from 'react'

export const FullScreenLoading = () => {

  return (
    <Box
      display='flex'
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      height='calc(80vh - 200px)'
    >
      <Typography sx={{ mb: 3 }}>Cargando...</Typography>
      <CircularProgress thickness={2} />
    </Box>
  )
}
