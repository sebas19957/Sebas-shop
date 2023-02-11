import { useState, useEffect } from 'react';
import useSWR from 'swr';
import { Grid, Typography } from '@mui/material';
import {
  AccessTimeOutlined,
  AttachMoneyOutlined,
  CancelPresentationOutlined,
  CategoryOutlined,
  CreditCardOffOutlined,
  CreditCardOutlined,
  DashboardOutlined,
  GroupOutlined,
  ProductionQuantityLimitsOutlined
} from '@mui/icons-material';

import { AdminLayout } from '../../components/layouts';
import { SummaryTitle } from '../../components/admin';
import { DashboardSummaryResponse } from '../../interfaces';

const DashboardPage = () => {

  const { data, error } = useSWR<DashboardSummaryResponse>('/api/admin/dashboard', {
    refreshInterval: 30 * 1000 // cada 30 segundos
  });

  const [refreshIn, setRefreshIn] = useState(30);

  useEffect(() => {
    const interval = setInterval(() => {
      setRefreshIn(refreshIn => refreshIn > 0 ? refreshIn - 1 : 30);
    }, 1000);

    return () => clearInterval(interval);
  }, []);


  if (!data && !error) return <></>;

  if (error) {
    console.log(error);
    return <Typography>Error al cargar la información</Typography>
  }

  const {
    numberOfOrders,
    paidOrders,
    notPaidOrders,
    numberOfclients,
    numberOfProducts,
    productsWhitNoInventory,
    lowInventory,
  } = data!;

  return (
    <AdminLayout
      title='Dashboard'
      subTitle='Estadisticas generales'
      icon={<DashboardOutlined />}
    >
      <Grid container spacing={2}>
        <SummaryTitle
          title={numberOfOrders}
          subTitle='Ordenes totales'
          icon={<CreditCardOutlined color='secondary' sx={{ fontSize: 40 }} />}
        />
        <SummaryTitle
          title={paidOrders}
          subTitle='Ordenes pagadas'
          icon={<AttachMoneyOutlined color='success' sx={{ fontSize: 40 }} />}
        />
        <SummaryTitle
          title={notPaidOrders}
          subTitle='Ordenes pendientes'
          icon={<CreditCardOffOutlined color='error' sx={{ fontSize: 40 }} />}
        />
        <SummaryTitle
          title={numberOfclients}
          subTitle='Usuarios'
          icon={<GroupOutlined color='primary' sx={{ fontSize: 40 }} />}
        />
        <SummaryTitle
          title={numberOfProducts}
          subTitle='Productos'
          icon={<CategoryOutlined color='warning' sx={{ fontSize: 40 }} />}
        />
        <SummaryTitle
          title={productsWhitNoInventory}
          subTitle='Productos Sin Existencias'
          icon={<CancelPresentationOutlined color='error' sx={{ fontSize: 40 }} />}
        />
        <SummaryTitle
          title={lowInventory}
          subTitle='Bajo Inventario'
          icon={<ProductionQuantityLimitsOutlined color='warning' sx={{ fontSize: 40 }} />}
        />
        <SummaryTitle
          title={refreshIn}
          subTitle='Actualización en:'
          icon={<AccessTimeOutlined color='secondary' sx={{ fontSize: 40 }} />}
        />
      </Grid>
    </AdminLayout>
  )
}

export default DashboardPage