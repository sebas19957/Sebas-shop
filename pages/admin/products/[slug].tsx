import React, { ChangeEvent, FC, useRef } from 'react'
import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router';
import { useForm, Controller } from 'react-hook-form';

import {
  DriveFileRenameOutline,
  SaveOutlined,
  UploadOutlined
} from '@mui/icons-material';
import {
  Box,
  Button,
  capitalize,
  Card,
  CardActions,
  CardMedia,
  Checkbox,
  Chip,
  Divider,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Grid,
  ListItem,
  Paper,
  Radio,
  RadioGroup,
  TextField
} from '@mui/material';

import { AdminLayout } from '../../../components/layouts'
import { IProduct } from '../../../interfaces';
import { dbProducts } from '../../../database';
import { ISize, IType } from '../../../interfaces/products';
import { useEffect, useState } from 'react';
import shopApi from '../../../api/shopApi';
import { Product } from '../../../models';

const validTypes = ['shirts', 'pants', 'hoodies', 'hats'];
const validGender = ['men', 'women', 'kid', 'unisex']
const validSizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL']

interface FormData {
  _id?: string;
  description: string;
  images: string[];
  inStock: number;
  price: number;
  sizes: ISize[];
  slug: string;
  tags: string[];
  title: string;
  type: IType;
  gender: string;
}

interface Props {
  product: IProduct;
  slug: string
}

const ProductAdminPage: FC<Props> = ({ product, slug }) => {

  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [newTagValue, setNewTagValue] = useState('');
  const [isSaving, setIsSaving] = useState(false);

  const { register, handleSubmit, formState: { errors }, getValues, setValue, control, watch } = useForm({
    defaultValues: product
  })


  useEffect(() => {
    const subscription = watch((value, { name, type }) => {
      if (name === 'title') {
        const newSlug = value.title?.trim()
          .replaceAll(' ', '_')
          .replaceAll("'", '')
          .toLocaleLowerCase() || '';

        setValue('slug', newSlug);
      }
    })

    return () => subscription.unsubscribe();
  }, [watch, setValue])

  const onChangeSize = (size: ISize) => {
    const currentSizes = getValues('sizes');
    if (currentSizes.includes(size)) {
      return setValue('sizes', currentSizes.filter(s => s !== size), { shouldValidate: true })
    }

    setValue('sizes', [...currentSizes, size], { shouldValidate: true })
  }

  const onNewTag = () => {
    const newTag = newTagValue.trim().toLocaleLowerCase();
    setNewTagValue('');

    const currentTags = getValues('tags');

    if (currentTags.includes(newTag)) {
      return;
    }

    currentTags.push(newTag);
  }

  const onDeleteTag = (tag: string) => {
    const currentTags = getValues('tags').filter(t => t !== tag);
    setValue('tags', currentTags, { shouldValidate: true })
  }

  const onFilesSelected = async ({ target }: ChangeEvent<HTMLInputElement>) => {
    if (!target.files || target.files.length === 0) {
      return;
    }

    try {
      for (const file of target.files) {
        const formData = new FormData();
        formData.append('file', file);
        const { data } = await shopApi.post<{ message: string }>('/admin/upload', formData);
        setValue('images', [...getValues('images'), data.message], { shouldValidate: true })
      }
    } catch (error) {
      console.log(error);

    }
  }

  const onDeleteImage = (image: string) => {
    setValue(
      'images',
      getValues('images').filter(img => img !== image),
      { shouldValidate: true }
    )
  }

  const onSubmit = async (form: FormData) => {
    if (form.images.length < 2) return alert('Mínimo 2 imagenes');
    setIsSaving(true);

    try {
      const { data } = await shopApi({
        url: '/admin/products',
        method: form._id ? 'PUT' : 'POST',
        data: form
      });

      if (!form._id) {
        router.replace(`/admin/products/${form.slug}`)
      } else {
        setIsSaving(false);
      }

    } catch (error) {
      console.log(error);
      setIsSaving(false);
    }
  }

  return (
    <AdminLayout
      title={'Producto'}
      subTitle={slug !== 'new' ? `Editando: ${product.title}` : 'Crear producto'}
      icon={<DriveFileRenameOutline />}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box display='flex' justifyContent='end' sx={{ display: { xs: 'none', sm: 'flex' } }}>
          <Button
            color="primary"
            startIcon={<SaveOutlined />}
            sx={{ width: '150px' }}
            type="submit"
          >
            Guardar
          </Button>
        </Box>

        <Grid container spacing={2} sx={{ mt: { xs: 0.5, sm: 0 } }}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Título"
              variant="outlined"
              fullWidth
              sx={{ mb: 2 }}
              {...register('title', {
                required: 'Este campo es requerido',
                minLength: { value: 2, message: 'Mínimo 2 caracteres' }
              })}
              error={!!errors.title}
              helperText={errors.title?.message}
            />

            <Controller
              name="description"
              rules={{
                required: "Este campo es requerido",
              }}
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Descripción"
                  variant="outlined"
                  fullWidth
                  multiline
                  maxRows={5}
                  sx={{ mb: 2 }}
                  {...register('description', {
                    required: 'Este campo es requerido',
                    minLength: { value: 2, message: 'Mínimo 2 caracteres' }
                  })}
                  error={!!errors.description}
                  helperText={errors.description?.message}
                />
              )}
            />

            <TextField
              label="Inventario"
              type='number'
              variant="outlined"
              fullWidth
              sx={{ mb: 2 }}
              {...register('inStock', {
                required: 'Este campo es requerido',
                minLength: { value: 0, message: 'El valor mínimo es permitido 0' }
              })}
              error={!!errors.inStock}
              helperText={errors.inStock?.message}
            />

            <TextField
              label="Precio"
              type='number'
              variant="outlined"
              fullWidth
              sx={{ mb: 2 }}
              {...register('price', {
                required: 'Este campo es requerido',
                minLength: { value: 0, message: 'El valor mínimo es permitido 0' }
              })}
              error={!!errors.price}
              helperText={errors.price?.message}

            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              label="Slug - URL"
              variant="outlined"
              fullWidth
              sx={{ mb: 2 }}
              {...register('slug', {
                required: 'Este campo es requerido',
                validate: (val) => val.trim().includes(' ') ? 'No puede tener espacios en blanco' : undefined
              })}
              error={!!errors.slug}
              helperText={errors.slug?.message}
            />

            <TextField
              label="Etiquetas"
              variant="outlined"
              fullWidth
              sx={{ mb: 2 }}
              value={newTagValue}
              onChange={({ target }) => setNewTagValue(target.value)}
              onKeyUp={({ code }) => code === 'Space' ? onNewTag() : undefined}
              helperText="Presiona [spacebar] para agregar"
            />

            <Box sx={{
              display: 'flex',
              flexWrap: 'wrap',
              listStyle: 'none',
              p: 0,
              m: 0,
            }}
              component="ul">
              {
                getValues('tags').map((tag) => {

                  return (
                    <Chip
                      key={tag}
                      label={tag}
                      onDelete={() => onDeleteTag(tag)}
                      color="primary"
                      size='small'
                      sx={{ ml: 1 }}
                    />
                  );
                })}
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 1 }} />

        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <FormControl sx={{ mb: 1 }}>
              <FormLabel>Tipo</FormLabel>
              <RadioGroup
                row
                value={getValues('type')}
                onChange={({ target }) => setValue('type', target.value as IType, { shouldValidate: true })}
              >
                {
                  validTypes.map(option => (
                    <FormControlLabel
                      key={option}
                      value={option}
                      control={<Radio color='secondary' />}
                      label={capitalize(option)}
                    />
                  ))
                }
              </RadioGroup>
            </FormControl>

            <FormControl sx={{ mb: 1 }}>
              <FormLabel>Género</FormLabel>
              <RadioGroup
                row
                value={getValues('gender')}
                onChange={({ target }) => setValue('gender', target.value as any, { shouldValidate: true })}
              >
                {
                  validGender.map(option => (
                    <FormControlLabel
                      key={option}
                      value={option}
                      control={<Radio color='secondary' />}
                      label={capitalize(option)}
                    />
                  ))
                }
              </RadioGroup>
            </FormControl>

            <FormGroup>
              <FormLabel>Tallas</FormLabel>
              {
                validSizes.map(size => (
                  <FormControlLabel
                    key={size}
                    control={<Checkbox checked={getValues('sizes').includes(size as ISize)} />}
                    label={size}
                    onChange={() => onChangeSize(size as ISize)}
                  />
                ))
              }
            </FormGroup>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Box display='flex' flexDirection="column" sx={{ mt: 1 }}>
              <Button
                color="primary"
                fullWidth
                startIcon={<UploadOutlined />}
                sx={{ mb: 3 }}
                onClick={() => fileInputRef.current?.click()}
              >
                Cargar imagen
              </Button>

              {
                getValues('images').length === 0 ? (
                  <Chip
                    label="Es necesario al 2 imagenes"
                    color='error'
                    variant='outlined'
                  />
                ) : (
                  <FormLabel sx={{ mb: 1 }}>Imágenes cargadas: </FormLabel>
                )
              }
              <input
                ref={fileInputRef}
                type='file'
                multiple
                accept='image/png, image/gif, image/jpeg'
                style={{ display: 'none' }}
                onChange={onFilesSelected}
              />

              <Grid container spacing={2}>
                {
                  getValues('images').map(img => (
                    <Grid item xs={4} sm={3} key={img}>
                      <Card>
                        <CardMedia
                          component='img'
                          className='fadeIn'
                          image={img}
                          alt={img}
                        />
                        <CardActions>
                          <Button
                            fullWidth
                            color="error"
                            onClick={() => onDeleteImage(img)}
                          >
                            Borrar
                          </Button>
                        </CardActions>
                      </Card>
                    </Grid>
                  ))
                }
              </Grid>

            </Box>
          </Grid>
        </Grid>

        <Grid item xs={12} sm={6} sx={{ display: { xs: '', sm: 'none' } }}>
          <Box display='flex' flexDirection="column">
            <Button
              color="primary"
              fullWidth
              startIcon={<SaveOutlined />}
              sx={{ mt: 3 }}
            >
              Guardar
            </Button>

          </Box>
        </Grid>

      </form>
    </AdminLayout>
  )
}

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time
export const getServerSideProps: GetServerSideProps = async ({ query }) => {

  const { slug = '' } = query;

  let product: IProduct | null;

  if (slug === 'new') {
    const tempProduct = JSON.parse(JSON.stringify(new Product()))
    delete tempProduct._id;
    tempProduct.images = ['img1.jpg', 'img2.jpg'];
    product = tempProduct;
  } else {
    product = await dbProducts.getProductBySlug(slug.toString());
  }

  if (!product) {
    return {
      redirect: {
        destination: '/admin/products',
        permanent: false,
      }
    }
  }

  return {
    props: {
      product,
      slug
    }
  }
}


export default ProductAdminPage