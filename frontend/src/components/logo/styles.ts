import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLogo = styled(Link)`
  display: flex;
  flex: 0 0 auto;
  align-items: center;
  column-gap: 5px;
  text-decoration: none;
  color: ${({ theme }): string => theme.colors.text};
  font-weight: 550;
  transition: ${({ theme }): string => theme.transition('color')};
  outline: none;

  span {
    transition: ${({ theme }): string => theme.transition('transform')};
  }

  svg {
    fill: transparent;
    stroke: currentColor;
  }

  &:hover,
  &:focus-visible {
    color: ${({ theme }): string => theme.colors.primary};

    span {
      transform: translateX(5px);
    }
  }

  &:active {
    color: ${({ theme }): string => theme.colors.secondary};
  }
`;
