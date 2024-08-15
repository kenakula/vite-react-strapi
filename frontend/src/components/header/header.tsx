import { Logo } from '@components/logo';
import { ReactElement, useRef } from 'react';

import { GlobalSearch, UserMenu } from './components';
import { useHideOnScroll } from './hooks';
import { SearchContainer, StyledContainer, StyledHeader } from './styles';

export const Header = (): ReactElement => {
  const headerRef = useRef<HTMLHeadingElement>(null);

  const { isVisible } = useHideOnScroll({ headerRef });

  return (
    <StyledHeader $isVisible={isVisible} data-testid="header" ref={headerRef}>
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
