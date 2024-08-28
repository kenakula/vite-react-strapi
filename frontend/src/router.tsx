import { AuthLayout, BaseLayout, PrivateLayout } from '@components/layouts';
import { WithSuspense } from '@components/with-suspense';
import {
  AUTH_LAYOUT,
  FORGOT_PASSWORD_ROUTE,
  HOME_ROUTE,
  LOGIN_ROUTE,
  PROFILE_ROUTE,
  SIGNUP_ROUTE,
} from '@shared/constants';
import { lazy } from 'react';
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

const HomePage = lazy(() => import('@pages/home-page/home-page'));
const ProfilePage = lazy(() => import('@pages/profile-page/profile-page'));
const LoginPage = lazy(() => import('@pages/login-page/login-page'));
const SignupPage = lazy(() => import('@pages/signup-page/signup-page'));
const ForgotPasswordPage = lazy(() => import('@pages/forgot-password-page/forgot-password-page'));
const NotFoundPage = lazy(() => import('@pages/not-found-page/not-found-page'));

const elementRoutes = createRoutesFromElements(
  <Route>
    <Route element={<BaseLayout />}>
      <Route
        element={
          <WithSuspense>
            <HomePage />
          </WithSuspense>
        }  path={HOME_ROUTE} index
      />
    </Route>
    <Route element={<PrivateLayout />}>
      <Route
        element={
          <WithSuspense>
            <ProfilePage />
          </WithSuspense>
        } path={PROFILE_ROUTE}
      />
    </Route>
    <Route element={<AuthLayout />} path={AUTH_LAYOUT}>
      <Route
        element={
          <WithSuspense>
            <LoginPage />
          </WithSuspense>
        } path={LOGIN_ROUTE}
      />
      <Route
        element={
          <WithSuspense>
            <SignupPage />
          </WithSuspense>
        } path={SIGNUP_ROUTE}
      />
      <Route
        element={
          <WithSuspense>
            <ForgotPasswordPage />
          </WithSuspense>
        } path={FORGOT_PASSWORD_ROUTE}
      />
    </Route>
    <Route
      element={
        <WithSuspense>
          <NotFoundPage />
        </WithSuspense>
      } path="*"
    />
  </Route>
);

export const router = createBrowserRouter(elementRoutes);
