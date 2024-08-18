import { Container } from '@components/container';
import { HEADER_HEIGHT } from '@shared/constants';
import styled from 'styled-components';

interface IHeaderStyles {
  $isVisible: boolean;
}

export const StyledHeader = styled.header<IHeaderStyles>`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  transition: ${({ theme }): string => theme.transition('transform')};
  transform: translateY(${({ $isVisible }): string => ($isVisible ? '0' : '-100%')});
  z-index: ${({ theme }): string => theme.zIndex.header};
  background-color: ${({ theme }): string => theme.colors.secondary};
`;

export const HeaderContainer = styled(Container)`
  display: flex;
  align-items: center;
  column-gap: 20px;
  min-height: ${HEADER_HEIGHT}px;
`;

export const SearchContainer = styled.div`
  flex-grow: 1;
  margin-left: auto;
  max-width: 40%;
`;
