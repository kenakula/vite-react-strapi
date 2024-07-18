import { AuthLayout,BaseLayout, PrivateLayout } from '@components/layout';
import { WithSuspense } from '@components/with-suspense';
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

const elementRoutes = createRoutesFromElements(
  <Route element={<BaseLayout />}>
    <Route path="/"  index element={<WithSuspense path="home-page" />} />
    <Route element={<PrivateLayout />}>
      <Route path="/profile" element={<WithSuspense path="profile-page" />} />
    </Route>
    <Route path="/auth" element={<AuthLayout />}>
      <Route path="/auth/login" element={<WithSuspense path="login-page" />} />
      <Route path="/auth/signup" element={<WithSuspense path="signup-page" />} />
    </Route>
  </Route>
);

export const router = createBrowserRouter(elementRoutes);
