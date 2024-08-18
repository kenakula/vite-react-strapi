import { authStoreSelector, useAppDispatch, useAppSelector } from '@app/store';
import { logout } from '@app/store/auth';
import { Avatar } from '@components/avatar';
import { Dropdown } from '@components/dropdown';
import { LOGIN_ROUTE, PROFILE_ROUTE } from '@shared/constants';
import { IMenuItem } from '@shared/interfaces';
import { ReactElement, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Container } from './styles';

export const UserMenu = (): ReactElement | null => {
  const { user } = useAppSelector(authStoreSelector);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const userDisplayName = useMemo(() => {
    if (!user) return '';

    return user.username ?? user.email;
  }, [user?.email, user?.username]);

  const handleOpen = (): void => {
    setIsMenuOpen(true);
  };

  const handleClose = (): void => {
    setIsMenuOpen(false);
  };

  const handleLogout = (): void => {
    dispatch(logout());
    navigate(LOGIN_ROUTE);
  };

  const menuItems: IMenuItem[] = [
    {
      id: 'profile',
      text: 'Профиль',
      link: PROFILE_ROUTE,
    },
    {
      id: 'line',
      text: '',
      type: 'line',
    },
    {
      id: 'logout',
      text: 'Выйти',
      onClick: handleLogout,
    },
  ];

  if (!user) return null;

  return (
    <Container ref={buttonRef} onClick={handleOpen}>
      <Avatar text={userDisplayName}/>
      <Dropdown
        onClose={handleClose}
        triggerRef={buttonRef}
        isOpen={isMenuOpen}
        position="bottomRight"
        menuItems={menuItems}
      />
    </Container>
  );
};
