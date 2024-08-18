import { buttonReset } from '@shared/mixins';
import styled from 'styled-components';

export const StyledMenuItem = styled.li`
  display: flex;
  
  a,
  button {
    ${buttonReset};
    padding: ${({ theme }): string => theme.spacing(1, 2)};
    width: 100%;
    font-size: ${({ theme }): string => theme.font.size.menu};
    text-align: left;
    text-decoration: none;
    color: ${({ theme }): string => theme.colors.text};
    transition: ${({ theme }): string => theme.transition('background-color')};
    
    &:hover {
      background-color: ${({ theme }): string => theme.colors.backgroundHover};
    }
  }
`;

export const MenuLine = styled.span`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }): string => theme.colors.backgroundHover};
`;
