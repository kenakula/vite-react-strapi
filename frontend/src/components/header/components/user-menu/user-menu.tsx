import { useAppDispatch } from '@app/store';
import { logout } from '@app/store/auth';
import { Avatar, Menu } from '@mantine/core';
import { LOGIN_ROUTE, PROFILE_ROUTE } from '@shared/constants';
import { IUser } from '@shared/interfaces';
import { memo, ReactElement } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import classes from './user-menu.module.css';

interface IProps {
  user: IUser | null;
}

const UserMenuComponent = ({ user }: IProps): ReactElement | null => {
  if (!user) return null;

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = (): void => {
    dispatch(logout());
    navigate(LOGIN_ROUTE);
  };

  return (
    <Menu shadow="lg" withArrow>
      <Menu.Target>
        <button className={classes.userMenu} type="button">
          <Avatar radius="xl" />
        </button>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item to={PROFILE_ROUTE} component={Link}>Profile</Menu.Item>
        <Menu.Divider />
        <Menu.Item color="red" onClick={handleLogout}>Logout</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

export const UserMenu = memo(UserMenuComponent);
