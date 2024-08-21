import { AppShell } from '@mantine/core';
import { ReactElement } from 'react';
import { Outlet } from 'react-router-dom';

import classes from './auth-layout.module.css';

export const AuthLayout = (): ReactElement => (
  <AppShell classNames={{ main: classes.main }}>
    <AppShell.Main>
      <Outlet />
    </AppShell.Main>
  </AppShell>
);
