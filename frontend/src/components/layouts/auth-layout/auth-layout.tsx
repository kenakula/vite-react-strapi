import { Container } from '@components/layouts';
import { ReactElement } from 'react';
import { Outlet } from 'react-router-dom';

export const AuthLayout = (): ReactElement => (
  <Container className="auth-layout">
    <Outlet/>
  </Container>
);
