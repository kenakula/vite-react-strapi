import { useGetAppDataQuery } from '@app/store/app';
import { useGetMeQuery } from '@app/store/auth';
import { Header } from '@components/header';
import { AppShell, Container } from '@mantine/core';
import { ReactElement } from 'react';
import { Outlet } from 'react-router-dom';

export const BaseLayout = (): ReactElement => {
  useGetMeQuery();
  useGetAppDataQuery();

  return (
    <AppShell
      data-label="base-layout"
      header={{ height: 55 }}
      padding="sm"
    >
      <Header />
      <AppShell.Main>
        <Container px={0}>
          <Outlet />
        </Container>
      </AppShell.Main>
    </AppShell>
  );
};
