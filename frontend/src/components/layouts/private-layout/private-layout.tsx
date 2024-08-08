import { useGetMeQuery } from '@app/store/auth';
import { Spinner } from '@components/spinner';
import { ReactElement } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { Container } from '../components';

export const PrivateLayout = (): ReactElement => {
  const { data, isLoading } = useGetMeQuery();

  if (isLoading) return <Spinner />;

  if (!data) return <Navigate to="/auth/login" />;

  return (
    <Container data-testid="private_layout">
      <Outlet />
    </Container>
  );
};
