import { router } from '@app/router';
import { observer } from 'mobx-react-lite';
import { ReactElement } from 'react';
import { RouterProvider } from 'react-router-dom';

const AppComponent = (): ReactElement => {
  return <RouterProvider router={router} />;
};

export const App = observer(AppComponent);
