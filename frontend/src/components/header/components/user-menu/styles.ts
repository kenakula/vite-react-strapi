import { buttonReset } from '@shared/mixins';
import styled from 'styled-components';

export const Container = styled.button`
  ${buttonReset};
  position: relative;
  display: flex;
  align-items: center;
  column-gap: ${({ theme }): string => theme.spacing(1)};
  border-radius: 50%;
  transition: ${({ theme }): string => theme.transition('opacity')};
  
  &:hover {
    opacity: 0.8;
  }
`;
