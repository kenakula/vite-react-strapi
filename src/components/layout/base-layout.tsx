import { Container } from '@mui/material';
import { ReactElement } from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from './components';

export const BaseLayout = (): ReactElement => {
  return (
    <>
      <Header showMenuToggle={false} />
      <Container component="main">
        <Outlet />
      </Container>
    </>
  );
};
