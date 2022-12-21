import { useState, useContext } from 'react';
import { useRouter } from 'next/router';
import NextLink from 'next/link';
import { Box, Button, Chip, Grid, Link, TextField, Typography } from '@mui/material';
import { ErrorOutline } from '@mui/icons-material';
import { useForm } from "react-hook-form";

import { AuthContext } from '../../context';
import { AuthLayout } from '../../components/layouts'
import { validations } from '../../utils';

type FormData = {
  name: string;
  email: string,
  password: string,
};

const RegisterPage = () => {

  const router = useRouter();
  const { registerUser } = useContext(AuthContext)

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const [showError, setShowError] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState('');

  const destination = router.query.p?.toString();

  const onRegisterForm = async ({ name, email, password }: FormData) => {

    setShowError(false);
    const { hasError, message } = await registerUser(name, email, password);

    if (hasError) {
      setShowError(true);
      setShowErrorMessage(message);
      setTimeout(() => { setShowError(false) }, 4000);
      return;
    }
    router.replace(`${destination ?? '/'}`);
  }

  return (
    <form onSubmit={handleSubmit(onRegisterForm)}>
      <AuthLayout title={'Ingresar'}>
        <Box sx={{ width: 350, padding: '10px 20px' }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant='h1' component="h1">Crear cuenta</Typography>
              <Chip
                label={showErrorMessage}
                color='error'
                icon={<ErrorOutline />}
                className='fadeIn'
                sx={{ display: showError ? 'flex' : 'none' }}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                label="Nombre completo"
                variant="filled"
                fullWidth
                {...register('name', {
                  required: 'Este campo es requerido',
                  minLength: { value: 3, message: 'Mínimo 3 caracteres' }
                })}
                error={!!errors.name}
                helperText={errors.name?.message}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Correo"
                variant="filled"
                fullWidth
                {...register('email', {
                  required: 'Este campo es requerido',
                  validate: validations.isEmail
                })}
                error={!!errors.email}
                helperText={errors.email?.message}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Contraseña"
                type='password'
                variant="filled"
                fullWidth
                {...register('password', {
                  required: 'Este campo es requerido',
                  minLength: { value: 6, message: 'Mínimo 6 caracteres' }
                })}
                error={!!errors.password}
                helperText={errors.password?.message}
              />
            </Grid>

            <Grid item xs={12}>
              <Button
                type='submit'
                color="secondary"
                className='circular-btn'
                size='large'
                fullWidth
              >
                Crear cuenta
              </Button>
            </Grid>

            <Grid item xs={12} display='flex' justifyContent='end'>
              <NextLink
                href={destination ? `/auth/login?p=${destination}` : '/auth/login'}
                passHref
              >
                <Link underline='always'>
                  ¿Ya tienes cuenta?
                </Link>
              </NextLink>
            </Grid>
          </Grid>
        </Box>
      </AuthLayout>
    </form>
  )
}

export default RegisterPage