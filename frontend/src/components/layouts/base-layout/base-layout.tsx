import { useGetAppDataQuery } from '@app/store/app';
import { Header } from '@components/header';
import { ReactElement } from 'react';
import { Outlet } from 'react-router-dom';

export const BaseLayout = (): ReactElement => {
  useGetAppDataQuery();

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};
