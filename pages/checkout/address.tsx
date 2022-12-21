import { useContext, useEffect, useState } from "react";
import { useRouter } from 'next/router';
import { Box, Button, Grid, MenuItem, TextField, Typography } from "@mui/material"
import Cookie from 'js-cookie';
import { useForm } from "react-hook-form";

import { CartContext } from "../../context";
import { ShopLayout } from "../../components/layouts"
import { countries } from '../../utils';

type FormData = {
  firstName: string;
  lastName: string;
  address: string;
  address2?: string;
  zip: string;
  city: string;
  country: string;
  phone: string;
}

const getAddressFromCookies = (): FormData => {
  return {
    firstName: Cookie.get('firstName') || '',
    lastName: Cookie.get('lastName') || '',
    address: Cookie.get('address') || '',
    address2: Cookie.get('address2') || '',
    zip: Cookie.get('zip') || '',
    city: Cookie.get('city') || '',
    country: Cookie.get('country') || '',
    phone: Cookie.get('phone') || '',
  }
}

const AddressPage = () => {

  const router = useRouter();
  const { updateAddress } = useContext(CartContext);

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    defaultValues: getAddressFromCookies()
  });

  const onAddressForm = (data: FormData) => {
    updateAddress(data);

    router.push('/checkout/summary');
  }

  return (
    <ShopLayout title="Dirección" pageDescription="Confirmar dirección del destino">
      <Typography variant="h1" component='h1'>Dirección</Typography>

      <form onSubmit={handleSubmit(onAddressForm)}>
        <Grid container spacing={2} sx={{ mt: 2 }}>
          <Grid item xs={12} sm={6}>
            <TextField
              label='Nombre'
              variant="filled"
              fullWidth
              {...register('firstName', {
                required: 'Este campo es requerido',
                minLength: { value: 3, message: 'Mínimo 3 caracteres' }
              })}
              error={!!errors.firstName}
              helperText={errors.firstName?.message}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              label='Apellido'
              variant="filled"
              fullWidth
              {...register('lastName', {
                required: 'Este campo es requerido',
                minLength: { value: 3, message: 'Mínimo 3 caracteres' }
              })}
              error={!!errors.lastName}
              helperText={errors.lastName?.message}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              label='Dirección'
              variant="filled"
              fullWidth
              {...register('address', {
                required: 'Este campo es requerido',
              })}
              error={!!errors.address}
              helperText={errors.address?.message}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              label='Dirección 2 (opcional)'
              variant="filled"
              fullWidth
              {...register('address2')}
              error={!!errors.address2}
              helperText={errors.address2?.message}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              label='Código Postal'
              variant="filled"
              fullWidth
              {...register('zip', {
                required: 'Este campo es requerido',
              })}
              error={!!errors.zip}
              helperText={errors.zip?.message}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              label='Ciudad'
              variant="filled"
              fullWidth
              {...register('city', {
                required: 'Este campo es requerido',
              })}
              error={!!errors.city}
              helperText={errors.city?.message}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              select
              variant="filled"
              fullWidth
              defaultValue={Cookie.get('country') || ''}
              label="País"
              inputProps={register('country', {
                required: 'Este campo es requerido',
              })}
              error={!!errors.country}
              helperText={errors.country?.message}
            >
              {countries.map((country) => (
                <MenuItem key={country.code} value={country.code}>
                  {country.name}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              label='Teléfono'
              variant="filled"
              fullWidth
              {...register('phone', {
                required: 'Este campo es requerido',
              })}
              error={!!errors.phone}
              helperText={errors.phone?.message}
            />
          </Grid>
        </Grid>

        <Box sx={{ mt: 5 }} display='flex' justifyContent='center'>
          <Button
            type="submit"
            color="secondary"
            className="circular-btn"
            size="large"
          >
            Revisar pedido
          </Button>
        </Box>
      </form>


    </ShopLayout>
  )
}

export default AddressPage