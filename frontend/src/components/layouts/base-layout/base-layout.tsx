import { useGetAppDataQuery } from '@app/store/app';
import { useGetMeQuery } from '@app/store/auth';
import { ReactElement } from 'react';
import { Outlet } from 'react-router-dom';

export const BaseLayout = (): ReactElement => {
  useGetMeQuery();
  useGetAppDataQuery();

  return (
    <>
      <header>Header</header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
