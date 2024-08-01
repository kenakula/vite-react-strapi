import { router } from '@app/router';
import { ReactElement } from 'react';
import { RouterProvider } from 'react-router-dom';

export const App = (): ReactElement => {
  return (
    <RouterProvider router={router} />
  );
};
