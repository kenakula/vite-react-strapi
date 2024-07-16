import { PrivateLayout } from '@components/layout';
import { AuthLayout } from '@components/layout/auth-layout';
import { HomePage } from '@pages/home-page/home-page';
import { LoginPage } from '@pages/login-page/login-page';
import { ProfilePage } from '@pages/profile-page/profile-page';
import { SignupPage } from '@pages/signup-page/signup-page';
import { createBrowserRouter, RouteObject } from 'react-router-dom';

const routes: RouteObject[] = [
  {
    element: <AuthLayout />,
    path: '/auth/*',
    children: [
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'signup',
        element: <SignupPage />,
      },
    ]
  },
  {
    element: <PrivateLayout />,
    children: [
      {
        element: <ProfilePage />,
        path: '/profile'
      }
    ]
  },
  {
    element: <HomePage />,
    path: '/',
    index: true,
  },
];

export const router = createBrowserRouter(routes);
