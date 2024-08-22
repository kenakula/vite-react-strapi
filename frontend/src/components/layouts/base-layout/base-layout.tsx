import { useGetAppDataQuery } from '@app/store/app';
import { useGetMeQuery } from '@app/store/auth';
import { Header } from '@components/header';
import { AppShell } from '@mantine/core';
import { ReactElement } from 'react';
import { Outlet } from 'react-router-dom';

export const BaseLayout = (): ReactElement => {
  useGetMeQuery();
  useGetAppDataQuery();

  return (
    <AppShell
      padding="sm"
      header={{ height: 55 }}
      data-label="base-layout"
    >
      <Header />
      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
};
