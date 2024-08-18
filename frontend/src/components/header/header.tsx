import { Logo } from '@components/logo';
import { ReactElement, useRef } from 'react';

import { GlobalSearch, UserMenu } from './components';
import { useHideOnScroll } from './hooks';
import { HeaderContainer, SearchContainer, StyledHeader } from './styles';

export const Header = (): ReactElement => {
  const headerRef = useRef<HTMLHeadingElement>(null);

  const { isVisible } = useHideOnScroll({ headerRef });

  return (
    <StyledHeader $isVisible={isVisible} data-testid="header" ref={headerRef}>
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
