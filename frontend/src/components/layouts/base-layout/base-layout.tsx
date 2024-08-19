import { useGetAppDataQuery } from '@app/store/app';
import { useGetMeQuery } from '@app/store/auth';
import { Header } from '@components/header';
import { ReactElement } from 'react';
import { Outlet } from 'react-router-dom';

export const BaseLayout = (): ReactElement => {
  useGetMeQuery();
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
