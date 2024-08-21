import { authStoreSelector, useAppSelector } from '@app/store';
import { useGetMeQuery } from '@app/store/auth';
import { LOGIN_ROUTE } from '@shared/constants';
import { FC } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

interface IProps {
  redirectPath?: string;
}

export const PrivateLayout: FC<IProps> = ({ redirectPath = LOGIN_ROUTE }) => {
  useGetMeQuery();
  const { isAuthenticated, isLoading } = useAppSelector(authStoreSelector);
  const location = useLocation();

  if (isLoading) return <span>loading ...</span>;

  if (!isAuthenticated) return <Navigate to={redirectPath} replace state={{ redirectTo: location }} />;

  return <Outlet />;
};
