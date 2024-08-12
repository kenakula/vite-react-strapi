import { HTMLProps, ReactElement } from 'react';

import { StyledSkeleton } from './styles';
import { SkeletonType } from './types';

interface IProps extends HTMLProps<HTMLDivElement> {
  type?: SkeletonType;
}

export const Skeleton = ({ type = 'text', ...rest }: IProps): ReactElement => {

  return (
    <StyledSkeleton type={type} data-testid={`skeleton_${type}`} {...rest} />
  );
};
