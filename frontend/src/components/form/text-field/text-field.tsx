import { Label } from '@components/form/label/label';
import { ReactElement, useId } from 'react';

import { StyledFieldContainer, StyledFieldWrapper, StyledTextField } from './styles';

interface IProps extends Partial<HTMLInputElement> {
  name: string;
  label: string;
  hiddenLabel?: boolean;
}

export const TextField = ({ name, hiddenLabel, label, ...rest }: IProps): ReactElement => {
  const id = useId();

  return (
    <StyledFieldContainer>
      {label && <Label id={id} text={label} isHidden={hiddenLabel} />}
      <StyledFieldWrapper>
        <StyledTextField {...rest} id={id} type="text" name={name} />
      </StyledFieldWrapper>
    </StyledFieldContainer>
  );
};
