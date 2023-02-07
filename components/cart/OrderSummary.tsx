import { useContext, FC } from 'react';
import { Grid, Typography } from "@mui/material"
import { CartContext } from "../../context"
import { currency } from "../../utils";

interface Props {
  numberOfItemsOrder?: number,
  subTotalOrder?: number,
  totalOrder?: number,
  taxOrder?: number,
}

export const OrderSummary: FC<Props> = ({ numberOfItemsOrder, subTotalOrder, totalOrder, taxOrder }) => {

  const { numberOfItems, subTotal, total, tax } = useContext(CartContext);

  return (
    <Grid container>

      <Grid item xs={6}>
        <Typography>No. Productos</Typography>
      </Grid>
      <Grid item xs={6} display='flex' justifyContent='end'>
        <Typography>
          {numberOfItemsOrder ?? numberOfItems} {numberOfItemsOrder ? numberOfItemsOrder > 1 ? 'productos' : 'producto' : numberOfItems > 1 ? 'productos' : 'producto'}
        </Typography>
      </Grid>

      <Grid item xs={6}>
        <Typography>SubTotal</Typography>
      </Grid>
      <Grid item xs={6} display='flex' justifyContent='end'>
        <Typography>{currency.format(subTotalOrder ?? subTotal)}</Typography>
      </Grid>

      <Grid item xs={6}>
        <Typography>Impuestos ({Number(process.env.NEXT_PUBLIC_TAX_RATE) * 100})%</Typography>
      </Grid>
      <Grid item xs={6} display='flex' justifyContent='end'>
        <Typography>{currency.format(taxOrder ?? tax)}</Typography>
      </Grid>

      <Grid item xs={6} sx={{ mt: 2 }}>
        <Typography variant="subtitle1">Total:</Typography>
      </Grid>
      <Grid item xs={6} sx={{ mt: 2 }} display='flex' justifyContent='end'>
        <Typography variant="subtitle1">{currency.format(totalOrder ?? total)}</Typography>
      </Grid>

    </Grid>
  )
}
