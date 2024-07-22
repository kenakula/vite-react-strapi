import { AuthLayout,BaseLayout, PrivateLayout } from '@components/layout';
import { WithSuspense } from '@components/with-suspense';
import { lazy } from 'react';
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

const HomePage = lazy(() => import('@pages/home-page/home-page'));
const ProfilePage = lazy(() => import('@pages/profile-page/profile-page'));
const LoginPage = lazy(() => import('@pages/login-page/login-page'));
const SignupPage = lazy(() => import('@pages/signup-page/signup-page'));

const elementRoutes = createRoutesFromElements(
  <Route element={<BaseLayout />}>
    <Route path="/"  index element={
      <WithSuspense>
        <HomePage />
      </WithSuspense>
    } />
    <Route element={<PrivateLayout />}>
      <Route path="/profile" element={
        <WithSuspense>
          <ProfilePage />
        </WithSuspense>
      } />
    </Route>
    <Route path="/auth" element={<AuthLayout />}>
      <Route path="/auth/login" element={
        <WithSuspense>
          <LoginPage />
        </WithSuspense>
      } />
      <Route path="/auth/signup" element={
        <WithSuspense>
          <SignupPage />
        </WithSuspense>
      } />
    </Route>
  </Route>
);

export const router = createBrowserRouter(elementRoutes);
