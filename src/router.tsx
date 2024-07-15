import { LayoutPrivate } from '@components/layout';
import { LayoutAuth } from '@components/layout/layout.auth';
import { HomePage } from '@pages/home-page/home-page';
import { LoginPage } from '@pages/login-page/login-page';
import { ProfilePage } from '@pages/profile-page/profile-page';
import { SignupPage } from '@pages/signup-page/signup-page';
import { createBrowserRouter, RouteObject } from 'react-router-dom';

const routes: RouteObject[] = [
  {
    element: <LayoutPrivate />,
    path: '/',
    children: [
      {
        element: <ProfilePage />,
        path: '/profile'
      }
    ]
  },
  {
    element: <LayoutAuth />,
    path: '/auth',
    children: [
      {
        path: '/auth/login',
        element: <LoginPage />,
      },
      {
        path: '/auth/signup',
        element: <SignupPage />,
      },
    ]
  },
  {
    element: <HomePage />,
    path: '/',
    index: true,
  },
];

export const router = createBrowserRouter(routes);
