import { Container } from '@components/container';
import styled from 'styled-components';

export const StyledHeader = styled.header`
  background-color: ${({ theme }): string => theme.colors.secondary}
`;

export const StyledContainer = styled(Container)`
  display: flex;
  align-items: center;
  column-gap: 20px;
`;

export const SearchContainer = styled.div`
  flex-grow: 1;
  margin-left: auto;
  max-width: 40%;
`;
