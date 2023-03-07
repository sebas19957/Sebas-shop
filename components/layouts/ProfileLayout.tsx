import { FC, ReactNode } from 'react';
import Head from 'next/head';

import { SideMenu } from '../ui';
import { AdminNavbar } from '../admin';
import { Box, Typography } from '@mui/material';

interface Props {
  title: string;
  pageDescription: string;
  children: ReactNode;
}

export const ProfileLayout: FC<Props> = ({ children, pageDescription, title }) => {
  return (
    <>

      <Head>
        <title>{title}</title>

        <meta name="description" content={pageDescription} />

        <meta name="og:title" content={title} />
        <meta name="og:description" content={pageDescription} />


      </Head>

      <nav>
        <AdminNavbar />
      </nav>

      <SideMenu />

      <main style={{
        margin: '80px auto',
        maxWidth: '1440px',
        padding: '0px 30px'
      }}>
        <Box className='fadeIn'>
          {children}
        </Box>
      </main>
    </>
  )
}


