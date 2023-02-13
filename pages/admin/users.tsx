import { useState, useEffect } from 'react';
import { Grid, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import useSWR from 'swr';

import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { PeopleOutline } from '@mui/icons-material';

import { AdminLayout } from '../../components/layouts';
import { IUser } from '../../interfaces';
import shopApi from '../../api/shopApi';

const UsersPage = () => {

  const { data, error, isLoading } = useSWR<IUser[]>('/api/admin/users');
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    if (data) {
      setUsers(data);
    }
  }, [data]);


  if (isLoading) return (<></>);

  const onRoleUpdated = async (userId: string, newRole: string) => {

    const previusUser = users.map(user => ({ ...user }))
    const updatedUser = users.map(user => ({
      ...user,
      role: userId === user._id ? newRole : user.role
    }));

    setUsers(updatedUser);
    // TODO: poner toat para notificar

    try {
      await shopApi.put('admin/users', { userId, role: newRole });
    } catch (error) {
      setUsers(previusUser);
      console.log(error);
      // TODO: poner toat para notificar
      alert(error);
    }
  }

  const rows = users.map(user => ({
    id: user._id,
    email: user.email,
    name: user.name,
    role: user.role,
    createAt: user.createdAt,
    updateAt: user.updatedAt
  }));

  const columns: GridColDef[] = [
    { field: 'email', headerName: 'Correo', headerAlign: 'center', align: 'center', width: 250 },
    { field: 'name', headerName: 'Nombre Completo', headerAlign: 'center', align: 'center', width: 300 },
    { field: 'createAt', headerName: 'Fecha Creación', headerAlign: 'center', align: 'center', width: 300 },
    {
      field: 'role',
      headerName: 'Rol',
      headerAlign: 'center',
      align: 'center',
      width: 300,
      sortable: false,
      renderCell: params => {

        return (
          <Select
            value={params.row.role}
            label='Rol'
            onChange={({ target }) => onRoleUpdated(params.row.id, target.value)}
            sx={{ width: 300 }}
          >
            <MenuItem value='admin'>Admin</MenuItem>
            <MenuItem value='client'>Client </MenuItem>
            <MenuItem value='super-user'>Super-user </MenuItem>
            <MenuItem value='SEO'>SEO </MenuItem>
          </Select>
        )
      }
    }
  ];

  return (
    <AdminLayout
      title='Usuario'
      subTitle='Mantenimiento de usuarios'
      icon={<PeopleOutline />}
    >

      <Grid container className='fadeIn'>
        <Grid item xs={12} sx={{ height: 650, width: '100%' }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[10]}
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

export default UsersPage;