import NextLink from 'next/link';
import useSWR from 'swr';
import { Box, Button, CardMedia, Grid, Link, Typography } from '@mui/material';
import { AddOutlined, CategoryOutlined } from '@mui/icons-material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

import { IProduct } from '../../../interfaces';
import { AdminLayout } from '../../../components/layouts';
import NotFoundOverlay from '../../../components/ui/DataGrid/DataNotFound';


const columns: GridColDef[] = [
  {
    field: 'img',
    headerName: 'Imagen',
    headerAlign: 'center',
    align: 'center',
    renderCell: params => {
      return (
        <a
          href={`/product/${params.row.slug}`}
          style={{ textDecoration: 'none' }}
          target='_blank'
          rel='noreferrer'
        >
          <CardMedia
            component='img'
            className='fadeIn'
            image={params.row.img}
          />
        </a>
      )
    }
  },
  { field: 'title', headerName: 'Nombre', headerAlign: 'center', align: 'left', width: 280 },
  { field: 'gender', headerName: 'Genero', headerAlign: 'center', align: 'center' },
  { field: 'type', headerName: 'Tipo', headerAlign: 'center', align: 'center', },
  { field: 'inStock', headerName: 'Inventario', headerAlign: 'center', align: 'center' },
  { field: 'price', headerName: 'Precio', headerAlign: 'center', align: 'center' },
  { field: 'sizes', headerName: 'Tallas', headerAlign: 'center', align: 'center', width: 170 },
  { field: 'createdAt', headerName: 'Fecha Registro', headerAlign: 'center', align: 'center', width: 200 },
  {
    field: '',
    headerName: 'Acciones',
    headerAlign: 'center',
    align: 'center',
    width: 130,
    sortable: false,
    disableColumnMenu: true,
    renderCell: params => {
      return (
        <NextLink href={`/admin/products/${params.row.slug}`}
          style={{ textDecoration: 'none' }}>
          <Button variant='contained' color='primary'>
            Editar
          </Button>
        </NextLink>
      )
    }
  },
];

const ProductsPage = () => {

  const { data, error, isLoading } = useSWR<IProduct[]>('/api/admin/products');

  if (isLoading) return (<></>);

  const rows = data!.map(product => ({
    id: product._id,
    img: product.images[0],
    slug: product.slug,
    title: product.title,
    gender: product.gender,
    type: product.type,
    inStock: product.inStock,
    price: product.price,
    sizes: product.sizes.join(', '),
    createdAt: product.createdAt,
  }));


  return (
    <AdminLayout
      title={`Productos (${data?.length})`}
      subTitle='Mantenimiento de productos'
      icon={<CategoryOutlined />}
    >
      <Box
        display='flex'
        justifyContent='end'
        sx={{ mb: 2 }}
      >
        <Button
          startIcon={<AddOutlined />}
          color="primary"
          href='/admin/products/new'
        >
          Crear producto
        </Button>
      </Box>

      <Grid container className='fadeIn'>
        <Grid item xs={12} sx={{ height: rows.length !== 0 ? 'auto' : { xs: 400, sm: 510 }, width: '100%' }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[10]}
            autoHeight={rows.length !== 0 ? true : false}
            components={{
              NoRowsOverlay: NotFoundOverlay
            }}
            sx={{
              "& .MuiDataGrid-cell:focus-within": {
                outline: 'transparent !important'
              },
              "& .MuiDataGrid-columnSeparator": {
                display: 'none'
              },
              "& .MuiDataGrid-footerContainer .MuiDataGrid-selectedRowCount": {
                display: 'none'
              },
              "& .MuiDataGrid-footerContainer": {
                justifyContent: 'flex-end'
              },
            }}
          />

        </Grid>
      </Grid>
    </AdminLayout>
  )
}

export default ProductsPage;