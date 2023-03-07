import { ChangeEvent, useState, useEffect } from 'react';
import { GetServerSideProps, NextPage } from 'next'
import { getSession } from 'next-auth/react';
import NextLink from 'next/link';
import { useForm } from "react-hook-form";
import dayjs from 'dayjs';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';

import { yupResolver } from '@hookform/resolvers/yup';


import {
  Typography,
  Grid,
  Chip,
  Button,
  Link,
  Box,
  Avatar,
  Divider,
  Card,
  CardContent,
  TextField,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Autocomplete
} from '@mui/material';
import { UserValidation } from '../../utils/validation/profile';
import { cities } from '../../utils/cities';
import { departments } from '../../utils/departments';
import { cellphoneMask } from '../../utils/cellphoneMask';

type FormData = {
  email: string;
  phone: string;
  gender: string;
  civilDtatus?: string;
  country: string;
  city: string;
  zip: string;
  address: string;
  addressDesciption: string;
  occupation: string;
  studyLevel: string;
  workActivity: string;
}

interface Props {
  orders: {}
}

const ProfilePage: NextPage<Props> = ({ orders }) => {

  const [selectGender, setSelectGender] = useState('female');
  const BaseUrl = 'https://res.cloudinary.com/sebas-shop/image/upload';
  const [imageProfile, setImageProfile] = useState(`${BaseUrl}/v1677861550/System/diq8bksor508nirfcwum.png`);

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    defaultValues: {
      email: '',
      phone: '',
      gender: '',
      civilDtatus: '',
      country: '',
      city: '',
      zip: '',
      address: '',
      addressDesciption: '',
      occupation: '',
      studyLevel: '',
      workActivity: '',
    },
    resolver: yupResolver(UserValidation)
  });

  const onSubmitUpdated = (data: FormData) => {
    console.log(data);
  }

  const handlerGender = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectGender(event.target.value);
    switch (event.target.value) {
      case 'female':
        setImageProfile(`${BaseUrl}/v1677861550/System/diq8bksor508nirfcwum.png`);
        break;
      case 'male':
        setImageProfile(`${BaseUrl}/v1677861550/System/p9lrvjgvrgzo01m83xhf.png`);
        break;
      case 'other':
        setImageProfile(`${BaseUrl}/v1678140250/System/ikelpp0ryzcuooqd41hj.jpg`);
        break;
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmitUpdated)}>
      <>
        <Grid
          container
          spacing={2}
          direction='row'
          sx={{
            backgroundImage: `url(https://res.cloudinary.com/sebas-shop/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1677874886/System/ntfchvow6oaqelkhjhua.png)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '101.5vh',
            textAlign: 'center'
          }}
        >
          <Grid
            item
            xs={12}
            md={3}
            sx={{ backgroundColor: 'rgba(0,0,0,0.1)' }}
          >
            <Box
              display='flex'
              justifyContent="space-between"
              sx={{ mt: 2, m: 2 }}
            >
              <NextLink href='/' passHref legacyBehavior>
                <Link display='flex' alignItems='center'>
                  <Typography variant='h6' sx={{ fontSize: 36 }}>Sebas |</Typography>
                  <Typography sx={{ ml: 0.5, fontSize: 30 }}>Shop</Typography>
                </Link>
              </NextLink>

              <Box sx={{ display: { md: 'none', xs: 'flex' } }}>
                <Button
                  variant='outlined'
                  startIcon={<ArrowBackOutlinedIcon />}
                  color='primary'
                  size='medium'
                >
                  Volver
                </Button>
              </Box>

            </Box>

            <Box
              display='flex'
              justifyContent='center'
              sx={{ mt: 5 }}
            >
              <Avatar
                alt="Remy Sharp"
                src={imageProfile}
                sx={{ width: 200, height: 200, backgroundColor: 'white' }}
              />
            </Box>

            <Typography variant='h5' sx={{ fontSize: 36, mt: 1 }}>Mi Perfil</Typography>
            <Typography sx={{ mt: 1, fontSize: 17 }}>
              Mantener actualizada tu información te permite tener una mejor experiencia en Sebas-Shop.
            </Typography>

            <Divider sx={{ m: 2 }} />

            <Box
              display='flex'
              justifyContent='center'
              sx={{ mt: 5, textAlign: 'left', mb: { xs: 4 } }}
            >
              <Card sx={{ minWidth: '85%', backgroundColor: 'rgba(0,0,0,0.2)' }}>
                <CardContent>
                  <Box sx={{ mt: 1 }}>
                    <Typography sx={{ fontSize: 16 }}>Nombre: </Typography>
                    <Typography variant='h5' sx={{ fontWeight: 'bold' }}>Sebastian</Typography>
                  </Box>
                  <Box sx={{ mt: 1 }}>
                    <Typography sx={{ fontSize: 16 }}>Apellido: </Typography>
                    <Typography variant='h5' sx={{ fontWeight: 'bold' }}>Mosquera Valencia </Typography>
                  </Box>
                  <Box sx={{ mt: 1 }}>
                    <Typography sx={{ fontSize: 16 }}>Tipo de documento: </Typography>
                    <Typography variant='h5' sx={{ fontWeight: 'bold' }}>C.C </Typography>
                  </Box>
                  <Box sx={{ mt: 1 }}>
                    <Typography sx={{ fontSize: 16 }}>No. de documento: </Typography>
                    <Typography variant='h5' sx={{ fontWeight: 'bold' }}>1152456547 </Typography>
                  </Box>

                </CardContent>

              </Card>
            </Box>

          </Grid>
          <Grid
            item
            container
            xs={12}
            md={9}
            spacing={1}
            alignContent='center'

          >
            <Grid
              container
              justifyContent="flex-end"
              alignItems="center"
              sx={{ display: { xs: 'none', md: 'flex' }, m: 5, mt: -5 }}
            >
              <Button
                variant='outlined'
                startIcon={<ArrowBackOutlinedIcon />}
                color='primary'
                size='large'
              >
                Volver
              </Button>
            </Grid>

            <Grid item xs={12} md={4} sx={{ p: { md: 4, xs: 0 }, m: { md: 0, xs: 3 } }}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img
                  src={`${BaseUrl}/v1677864634/System/qafrb76ogi0wll5fgjmn.png`}
                  width={30}
                  alt='personal-info'
                />
                <Typography sx={{ fontWeight: 'bold', ml: 1, fontSize: 18 }}>Info. Personal</Typography>
              </Box>

              {/* <form onSubmit={handleSubmit(onSubmitAddress)}> */}
              <Grid container spacing={3} sx={{ mt: 1 }} justifyContent='center'>
                <Grid item xs={12}>
                  <TextField
                    label='Email'
                    variant="outlined"
                    fullWidth
                    {...register('email', {
                      required: 'Este campo es requerido'
                    })}
                    error={!!errors.email}
                    helperText={errors.email?.message}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label='Celular'
                    variant="outlined"
                    fullWidth
                    {...register('address', {
                      required: 'Este campo es requerido'
                    })}
                    type='number'
                    error={!!errors.address}
                    helperText={errors.address?.message}
                  />
                </Grid>

                <Grid item xs={12}>
                  <FormControl>
                    <FormLabel sx={{
                      fontWeight: 'bold',
                      ml: 1,
                      fontSize: 18,
                      color: 'black'
                    }}
                    >
                      Género
                    </FormLabel>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      value={selectGender}
                      name="radio-buttons-group"
                      onChange={(e) => handlerGender(e)}
                      row
                    >
                      <FormControlLabel
                        value="female"
                        control={
                          <Radio
                            icon={
                              <Avatar
                                alt="img-female-b"
                                src={`${BaseUrl}/v1677864634/System/evuhirnmy5xtuzd87hxz.png`}
                                sx={{
                                  width: 40,
                                  height: 40,
                                  border: '1px solid black',
                                  "& .MuiAvatar-img": {
                                    padding: '3px'
                                  },
                                }}
                              />
                            }
                            checkedIcon={
                              <Avatar
                                alt="imge-female-w"
                                src={`${BaseUrl}/v1677869990/System/uf7q9wdavkmtfdvaavid.png`}
                                sx={{
                                  width: 40,
                                  height: 40,
                                  backgroundColor: 'black',
                                  "& .MuiAvatar-img": {
                                    padding: '3px'
                                  },
                                }}
                              />
                            }
                          />
                        }
                        label="F"
                      />
                      <FormControlLabel
                        value="male"
                        control={
                          <Radio
                            icon={
                              <Avatar
                                alt="img-male-b"
                                src={`${BaseUrl}/v1677864634/System/jhlsof2inm75kbcgiml2.png`}
                                sx={{
                                  width: 40,
                                  height: 40,
                                  border: '1px solid black',
                                  "& .MuiAvatar-img": {
                                    padding: '3px'
                                  },
                                }}
                              />
                            }
                            checkedIcon={
                              <Avatar
                                alt="img-male-w"
                                src={`${BaseUrl}/v1677869990/System/i6fqixbhwn7hrcqaczhl.png`}
                                sx={{
                                  width: 40,
                                  height: 40,
                                  backgroundColor: 'black',
                                  "& .MuiAvatar-img": {
                                    padding: '3px'
                                  },
                                }}
                              />
                            }
                          />
                        }
                        label="M"
                      />
                      <FormControlLabel
                        value="other"
                        control={
                          <Radio
                            icon={
                              <Avatar
                                alt="img-other-b"
                                src={`${BaseUrl}/v1677869782/System/a2pwwme7usbw2s1z3dbx.png`}
                                sx={{
                                  width: 40,
                                  height: 40,
                                  border: '1px solid black',
                                  "& .MuiAvatar-img": {
                                    padding: '3px'
                                  },
                                }}
                              />
                            }
                            checkedIcon={
                              <Avatar
                                alt="img-other-w"
                                src={`${BaseUrl}/v1677869990/System/detijwdtk0lvuzusgeih.png`}
                                sx={{
                                  width: 40,
                                  height: 40,
                                  backgroundColor: 'black',
                                  "& .MuiAvatar-img": {
                                    padding: '3px'
                                  },
                                }}
                              />
                            }
                          />
                        }
                        label="Otro"
                      />
                    </RadioGroup>
                  </FormControl>
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    label='Fecha de nacimiento'
                    variant="outlined"
                    fullWidth
                    {...register('address', {
                      required: 'Este campo es requerido'
                    })}
                    error={!!errors.address}
                    helperText={errors.address?.message}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    label='Estado civil'
                    variant="outlined"
                    fullWidth
                    {...register('address', {
                      required: 'Este campo es requerido'
                    })}
                    error={!!errors.address}
                    helperText={errors.address?.message}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    label='Dirección'
                    variant="outlined"
                    fullWidth
                    {...register('address', {
                      required: 'Este campo es requerido'
                    })}
                    error={!!errors.address}
                    helperText={errors.address?.message}
                  />
                </Grid>
              </Grid>
              {/* </form> */}
            </Grid>

            <Grid item xs={12} md={4} sx={{ p: { md: 4, xs: 0 }, m: { md: 0, xs: 3 } }}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img
                  src={`${BaseUrl}/v1677864634/System/ylzgstciht7mdvkdbeav.png`}
                  width={30}
                  alt="location"
                />
                <Typography sx={{ fontWeight: 'bold', ml: 1, fontSize: 18 }}>Ubicación</Typography>
              </Box>

              {/* <form onSubmit={handleSubmit(onSubmitAddress)}> */}
              <Grid container spacing={3} sx={{ mt: 1 }}>
                <Grid item xs={12}>
                  <TextField
                    label='País de recidencia'
                    variant="outlined"
                    fullWidth
                    {...register('address', {
                      required: 'Este campo es requerido'
                    })}
                    error={!!errors.address}
                    helperText={errors.address?.message}
                  />
                </Grid>

                <Grid item xs={12}>
                  <Autocomplete
                    fullWidth
                    options={departments}
                    filterOptions={(x) => x}
                    getOptionLabel={(option: any) => option.name}
                    renderOption={(props: any, option: any) => (
                      <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                        {option.name}
                      </Box>
                    )}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Departamento"
                        variant="outlined"
                        fullWidth
                        inputProps={{
                          ...params.inputProps,
                        }}
                        {...register('city', {
                          required: 'Este campo es requerido'
                        })}
                        error={!!errors.city}
                        helperText={errors.city?.message}
                      />
                    )}
                  />
                </Grid>

                <Grid item xs={12}>
                  <Autocomplete
                    fullWidth
                    options={cities}
                    filterOptions={(x) => x}
                    getOptionLabel={(option) => option.city}
                    renderOption={(props, option) => (
                      <Box key={option.department + '_' + option.city} component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                        {option.city}
                      </Box>
                    )}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Ciudad"
                        variant="outlined"
                        fullWidth
                        inputProps={{
                          ...params.inputProps,
                        }}
                        {...register('city', {
                          required: 'Este campo es requerido'
                        })}
                        error={!!errors.city}
                        helperText={errors.city?.message}
                      />
                    )}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    label='Dirección'
                    variant="outlined"
                    fullWidth
                    {...register('address', {
                      required: 'Este campo es requerido'
                    })}
                    error={!!errors.address}
                    helperText={errors.address?.message}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label='Información adicional (Dirección)'
                    variant="outlined"
                    fullWidth
                    {...register('address', {
                      required: 'Este campo es requerido'
                    })}
                    error={!!errors.address}
                    helperText={errors.address?.message}
                  />
                </Grid>
              </Grid>

              {/* </form> */}
            </Grid>

            <Grid item xs={12} md={4} sx={{ p: { md: 4, xs: 0 }, m: { md: 0, xs: 3 } }}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img
                  src={`${BaseUrl}/v1677866034/System/abvogyy37zxg9tpd9i7b.png`}
                  width={30}
                />
                <Typography sx={{ fontWeight: 'bold', ml: 1, fontSize: 18 }}>Info. Adicional</Typography>
              </Box>

              {/* <form onSubmit={handleSubmit(onSubmitAddress)}> */}

              <Box
                display='flex'
                justifyContent='center'
                sx={{ mt: 3, textAlign: 'left' }}
              >
                <Card sx={{ minWidth: '95%', backgroundColor: 'rgba(0,0,0,0.2)' }}>
                  <CardContent>
                    <FormControl>
                      <FormLabel sx={{
                        fontWeight: 'bold',
                        ml: 1,
                        fontSize: 18,
                        color: 'black'
                      }}
                      >
                        Ocupación
                      </FormLabel>
                      <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="female"
                        name="radio-buttons-group"
                      >
                        <FormControlLabel value="estudiante" control={<Radio />} label="Estudiante" />
                        <FormControlLabel value="empleado" control={<Radio />} label="Empleado" />
                        <FormControlLabel value="independiente" control={<Radio />} label="Independiente" />
                        <FormControlLabel value="pensionado" control={<Radio />} label="Pensionado" />
                        <FormControlLabel value="otros" control={<Radio />} label="Otro" />
                      </RadioGroup>
                    </FormControl>

                  </CardContent>

                </Card>
              </Box>

              <Grid container spacing={3} sx={{ mt: 1 }}>
                <Grid item xs={12}>
                  <TextField
                    label='Nivel Educativo'
                    variant="outlined"
                    fullWidth
                    {...register('address', {
                      required: 'Este campo es requerido'
                    })}
                    error={!!errors.address}
                    helperText={errors.address?.message}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label='Actividad Laboral'
                    variant="outlined"
                    fullWidth
                    {...register('address', {
                      required: 'Este campo es requerido'
                    })}
                    error={!!errors.address}
                    helperText={errors.address?.message}
                  />
                </Grid>
              </Grid>

              {/* </form> */}
            </Grid>

            <Grid item xs={12} sx={{ mt: 2, mb: { xs: 4 } }}>
              <Button
                variant='contained'
                color='primary'
                size='large'
                startIcon={<SaveOutlinedIcon />}
                type='submit'
              >
                Actualizar
              </Button>
            </Grid>
          </Grid>

        </Grid>
      </>
    </form>

  )
}

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time

export const getServerSideProps: GetServerSideProps = async ({ req }) => {

  // const session: any = await getSession({ req });

  // if (!session) {
  //   return {
  //     redirect: {
  //       destination: '/auth/login?p=/profile',
  //       permanent: false,
  //     }
  //   }
  // }

  // if (user._id !== session.user._id) {
  //   return {
  //     redirect: {
  //       destination: '/',
  //       permanent: false,
  //     }
  //   }
  // }

  return {
    props: {

    }
  }
}

export default ProfilePage