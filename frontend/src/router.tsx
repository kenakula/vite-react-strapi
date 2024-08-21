import { AuthLayout, BaseLayout, PrivateLayout } from '@components/layouts';
import { WithSuspense } from '@components/with-suspense';
import { AUTH_LAYOUT, HOME_ROUTE, LOGIN_ROUTE, PROFILE_ROUTE, SIGNUP_ROUTE } from '@shared/constants';
import { lazy } from 'react';
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

const HomePage = lazy(() => import('@pages/home-page/home-page'));
const ProfilePage = lazy(() => import('@pages/profile-page/profile-page'));
const LoginPage = lazy(() => import('@pages/login-page/login-page'));
const SignupPage = lazy(() => import('@pages/signup-page/signup-page'));

const elementRoutes = createRoutesFromElements(
  <Route>
    <Route element={<BaseLayout />}>
      <Route path={HOME_ROUTE}  index element={
        <WithSuspense>
          <HomePage />
        </WithSuspense>
      } />
    </Route>
    <Route element={<PrivateLayout />}>
      <Route path={PROFILE_ROUTE} element={
        <WithSuspense>
          <ProfilePage />
        </WithSuspense>
      } />
    </Route>
    <Route path={AUTH_LAYOUT} element={<AuthLayout />}>
      <Route path={LOGIN_ROUTE} element={
        <WithSuspense>
          <LoginPage />
        </WithSuspense>
      } />
      <Route path={SIGNUP_ROUTE} element={
        <WithSuspense>
          <SignupPage />
        </WithSuspense>
      } />
    </Route>
  </Route>
);

export const router = createBrowserRouter(elementRoutes);
