import styled from 'styled-components';

interface IDrawerStyles {
  $isOpen?: boolean;
}

export const DrawerContainer = styled.div<IDrawerStyles>`
  min-width: 320px;
  transform: ${({ $isOpen }): string => $isOpen ? 'translateX(0)' : 'translateX(-100%'};
`;
