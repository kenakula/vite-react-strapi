import { Logo } from '@components/logo';
import { ReactElement, useRef } from 'react';

import { GlobalSearch, UserMenu } from './components';
import { HeaderContainer, SearchContainer, StyledHeader } from './styles';

export const Header = (): ReactElement => {
  const headerRef = useRef<HTMLHeadingElement>(null);

  return (
    <StyledHeader data-testid="header" ref={headerRef}>
      <HeaderContainer>
        <Logo />
        <SearchContainer>
          <GlobalSearch />
        </SearchContainer>
        <UserMenu />
      </HeaderContainer>
    </StyledHeader>
  );
};
