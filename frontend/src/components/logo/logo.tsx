import BoxIcon from '@media/icons/box.svg?react';
import { ReactElement } from 'react';

import { StyledLogo } from './styles';

export const Logo = (): ReactElement => {
  return (
    <StyledLogo to="/">
      <BoxIcon />
      <span>Logo</span>
    </StyledLogo>
  );
};
