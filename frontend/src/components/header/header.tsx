import { Logo } from '@components/logo';
import { ReactElement } from 'react';

import { GlobalSearch, UserMenu } from './components';
import { SearchContainer, StyledContainer, StyledHeader } from './styles';

export const Header = (): ReactElement => {
  return (
    <StyledHeader data-testid="header">
      <StyledContainer>
        <Logo />
        <SearchContainer>
          <GlobalSearch />
        </SearchContainer>
        <UserMenu />
      </StyledContainer>
    </StyledHeader>
  );
};
