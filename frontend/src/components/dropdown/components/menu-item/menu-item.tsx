import { IMenuItem } from '@shared/interfaces';
import { ReactElement, useCallback } from 'react';
import { NavLink } from 'react-router-dom';

import { MenuLine, StyledMenuItem } from './styles';

interface IProps {
  item: IMenuItem;
  onMenuItemClick: () => void;
}

export const MenuItem = ({ item: { text, link, onClick, type }, onMenuItemClick }: IProps): ReactElement => {
  const handleClick = useCallback((): void => {
    onClick?.();
    onMenuItemClick();
  }, [onClick, onMenuItemClick]);

  if (type === 'line') {
    return (
      <StyledMenuItem aria-hidden>
        <MenuLine />
      </StyledMenuItem>
    );
  }

  if (link) {
    return (
      <StyledMenuItem>
        <NavLink onClick={handleClick} to={link}>{text}</NavLink>
      </StyledMenuItem>
    );
  }

  if (onClick) {
    return (
      <StyledMenuItem>
        <button type="button" onClick={handleClick}>{text}</button>
      </StyledMenuItem>
    );
  }

  return (
    <StyledMenuItem>{text}</StyledMenuItem>
  );
};
