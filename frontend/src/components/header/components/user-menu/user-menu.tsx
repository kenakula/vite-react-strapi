import { useAppDispatch } from '@app/store';
import { logout } from '@app/store/auth';
import { Avatar, Menu } from '@mantine/core';
import { LOGIN_ROUTE, PROFILE_ROUTE } from '@shared/constants';
import { IUser } from '@shared/interfaces';
import IconLogout from '@shared/media/icons/logout.svg?react';
import IconProfile from '@shared/media/icons/profile.svg?react';
import { memo, ReactElement, useMemo } from 'react';
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

  const avatarUrl = useMemo(() => user?.avatar?.formats?.thumbnail?.url ?? undefined, [user]);

  return (
    <Menu shadow="lg" width={150} withArrow>
      <Menu.Target>
        <button className={classes.userMenu} type="button">
          <Avatar radius="lg" size="sm" src={avatarUrl} />
        </button>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item component={Link} leftSection={<IconProfile />} to={PROFILE_ROUTE}>Profile</Menu.Item>
        <Menu.Divider />
        <Menu.Item color="red" leftSection={<IconLogout />} onClick={handleLogout}>Logout</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

export const UserMenu = memo(UserMenuComponent);
