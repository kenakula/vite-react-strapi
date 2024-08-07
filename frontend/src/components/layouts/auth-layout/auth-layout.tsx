import { ReactElement } from 'react';
import { Outlet } from 'react-router-dom';

import { Container } from '../components/container/container';

export const AuthLayout = (): ReactElement => (
  <Container className="auth-layout">
    <Outlet/>
  </Container>
);
