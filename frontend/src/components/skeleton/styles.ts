import styled, { css, keyframes, RuleSet } from 'styled-components';

import { SkeletonType } from './types';

interface IStyledSkeletonProps {
  type: SkeletonType
}

const loadingKeyframes = keyframes`
  0% {
    background-color: hsl(200, 20%, 80%);
  }
  100% {
    background-color: hsl(200, 20%, 95%);
  }
`;

export const StyledSkeleton = styled.div<IStyledSkeletonProps>`
  min-height: 26px;
  animation: ${loadingKeyframes} 1s linear infinite alternate;
  border-radius: ${({ theme }): string => theme.radius(1)};
  
  ${({ type }): RuleSet<object> => {
    switch (type) {
      case 'text':
        return css`
        min-height: 26px
      `;
      case 'block':
        return css`
        min-height: 72px;
      `;
      case 'avatar':
        return css`
        width: 50px;
        height: 50px;
        border-radius: 50%;
      `;
    }
  }}
  
  & + && {
    margin-top: ${({ theme }): string => theme.spacing(1)};
  }
`;
