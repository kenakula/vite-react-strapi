import { visuallyHiddenStyles } from '@shared/styles';
import styled, { RuleSet } from 'styled-components';

interface IStyledLabelProps {
  $isHidden: boolean;
}

export const StyledLabel = styled.label<IStyledLabelProps>`
  ${({ $isHidden }): RuleSet<object> | string => $isHidden ? visuallyHiddenStyles : ''}
  
  color: ${({ theme }): string => theme.colors.text};
`;
