import { router } from '@app/router';
import { ThemeProvider } from '@app/theme';
import { ReactElement } from 'react';
import { RouterProvider } from 'react-router-dom';

export const App = (): ReactElement => (
  <ThemeProvider>
    <RouterProvider router={router} />
  </ThemeProvider>
);
