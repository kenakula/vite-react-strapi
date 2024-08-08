import { useGetAppDataQuery } from '@app/store/app';
import { ReactElement } from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from '../components/header/header';

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
