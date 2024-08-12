import { ReactElement } from 'react';

import { StyledLabel } from './styles';

interface IProps {
  id: string;
  isHidden?: boolean;
  text: string;
}

export const Label = ({ id, text, isHidden = false }: IProps): ReactElement =>
  <StyledLabel $isHidden={isHidden} htmlFor={id}>{text}</StyledLabel>;
