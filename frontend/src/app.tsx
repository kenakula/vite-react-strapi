import { router } from '@app/router';
import { ThemeProvider } from '@app/theme';
import { Notifications } from '@mantine/notifications';
import { ReactElement } from 'react';
import { RouterProvider } from 'react-router-dom';

export const App = (): ReactElement => (
  <ThemeProvider>
    <Notifications />
    <RouterProvider router={router} />
  </ThemeProvider>
);
