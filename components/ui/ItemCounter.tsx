import { FC } from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import { AddCircleOutline, RemoveCircleOutline } from '@mui/icons-material';


interface Props {
  currentValue: number;
  maxValue: number;

  updatedQuantity: (newQuantity: number) => void;
}

export const ItemCounter: FC<Props> = ({ currentValue, updatedQuantity, maxValue }) => {

  const addOrRemove = (value: number) => {

    if (value === -1) {
      if (currentValue === 1) return;

      return updatedQuantity(currentValue - 1)
    }

    if (currentValue >= maxValue) return;

    return updatedQuantity(currentValue + 1)
  }

  return (
    <Box display='flex' alignItems='center'>
      <IconButton
        disabled={currentValue === 1}
        onClick={() => addOrRemove(-1)}
      >
        <RemoveCircleOutline />
      </IconButton>
      <Typography
        sx={{ width: 40, textAlign: 'center' }}
      >
        {currentValue}
      </Typography>
      <IconButton
        disabled={currentValue === maxValue || currentValue === 5}
        onClick={() => addOrRemove(+1)}
      >
        <AddCircleOutline />
      </IconButton>
    </Box>
  )
}
