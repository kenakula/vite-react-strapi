import styled from 'styled-components';

export const AppContainer = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 16px;
  
  @media (min-width: ${({ theme }): string => theme.breakpoints.sm}) {
    padding: 0 20px;
  }
`;
