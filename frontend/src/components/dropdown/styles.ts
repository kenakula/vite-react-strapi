import { fadeIn } from '@shared/keyframes';
import { listReset } from '@shared/mixins';
import styled from 'styled-components';

interface IContainerStyle {
  $top?: number;
  $left?: number;
  $right?: number;
  $bottom?: number;
}

export const DropdownContainer = styled.div<IContainerStyle>`
  position: fixed;
  z-index: ${({ theme }): string => theme.zIndex.dropdown};
  top: ${({ $top }): string => $top || $top === 0 ? `${$top}px` : 'auto'};
  left: ${({ $left }): string => $left || $left === 0 ?`${$left}px` : 'auto'};
  right: ${({ $right }): string => $right || $right === 0 ?`${$right}px` : 'auto'};
  animation: ${fadeIn} 0.2s ease-in-out;
  
  max-width: 200px;
  padding-top: ${({ theme }): string => theme.spacing(0.5)};
  padding-bottom: ${({ theme }): string => theme.spacing(0.5)};
  background-color: ${({ theme }): string => theme.colors.white};
  border-radius: ${({ theme }): string => theme.borderRadius.sm};
  box-shadow: ${({ theme }): string => theme.shadows[0]};
`;

export const DropdownList = styled.ul`
  ${listReset};
`;
