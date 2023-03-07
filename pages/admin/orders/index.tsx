import { Button, Chip, Grid } from '@mui/material';
import useSWR from 'swr';

import { ConfirmationNumberOutlined } from '@mui/icons-material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { AdminLayout } from '../../../components/layouts';
import { IOrder, IUser } from '../../../interfaces';
import NotFoundOverlay from '../../../components/ui/DataGrid/DataNotFound';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'Orden ID', headerAlign: 'center', align: 'center', width: 220 },
  // { field: 'email', headerName: 'Correo', headerAlign: 'center', align: 'center', width: 250 },
  // { field: 'name', headerName: 'Nombre Completo', headerAlign: 'center', align: 'center', width: 250 },
  { field: 'total', headerName: 'Monto total', headerAlign: 'center', align: 'center', width: 90 },
  {
    field: 'isPaid',
    headerName: 'Estado',
    description: 'Muestra información si está pagada la orden o no',
    headerAlign: 'center',
    align: 'center',
    width: 130,
    renderCell: params => {
      return (
        params.row.isPaid
          ? <Chip color="success" label="Pagada" variant='outlined' />
          : <Chip color="error" label="Pendiente" variant='outlined' />
      )
    }
  },
  { field: 'noProducts', headerName: 'Nro. Productos', headerAlign: 'center', align: 'center', width: 120 },
  { field: 'createdAt', headerName: 'Fecha Orden', headerAlign: 'center', align: 'center', width: 170 },
  {
    field: 'check',
    headerName: 'Ver orden',
    headerAlign: 'center',
    align: 'center',
    width: 130,
    sortable: false,
    renderCell: params => {
      return (
        <a
          href={`/admin/orders/${params.row.id}`}
          style={{ textDecoration: 'none' }}
          target='_blank'
          rel='noreferrer'
        >
          <Button variant='contained' color='primary'>
            Ver orden
          </Button>
        </a>
      )
    }
  },
];

const OrdersPage = () => {

  const { data, error, isLoading } = useSWR<IOrder[]>('/api/admin/orders');

  if (isLoading) return (<></>);

  const rows = data!.map(order => ({
    id: order._id,
    // email: (order.user as IUser).email,
    // name: (order.user as IUser).name,
    total: order.total,
    isPaid: order.isPaid,
    noProducts: order.numberOfItems,
    createdAt: order.createdAt
  }));

  return (
    <AdminLayout
      title='Ordenes'
      subTitle='Mantenimiento de ordenes'
      icon={<ConfirmationNumberOutlined />}
    >
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

export default OrdersPage