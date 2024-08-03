import { useGetMeQuery } from '@app/store/auth';
import { Container } from '@components/layout';
import { ReactElement } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export const PrivateLayout = (): ReactElement => {
  const { data, isLoading } = useGetMeQuery();

  if (isLoading) return <span>Loading ...</span>;

  if (!data) return <Navigate to="/auth/login" />;

  return (
    <Container>
      <Outlet />
    </Container>
  );
};
