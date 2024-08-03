import { appStoreSelector, useAppDispatch, useAppSelector } from '@app/store';
import { logout } from '@app/store/auth';
import { ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';

const ProfilePage = (): ReactElement => {
  const { appName } = useAppSelector(appStoreSelector);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = (): void => {
    dispatch(logout());
    navigate('/auth/login');
  };

  return (
    <div>
      <p>ProfilePage: {appName}</p>
      <button onClick={handleLogout}>logout</button>
    </div>
  );
};

export default ProfilePage;
