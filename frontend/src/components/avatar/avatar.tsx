import { ForwardedRef, forwardRef, ReactElement, useCallback, useMemo } from 'react';

import { AvatarContainer } from './styles';

interface IProps {
  text: string;
  handleClick?: () => void;
}

const AvatarComponent = ({ text: incomingText, handleClick }: IProps, ref: ForwardedRef<HTMLDivElement>): ReactElement => {
  const text = useMemo(() => incomingText.toUpperCase()[0], [incomingText]);

  const handleComponentClick = useCallback((): void => {
    handleClick && handleClick();
  }, [handleClick]);

  return (
    <AvatarContainer ref={ref} onClick={handleComponentClick}>
      {text}
    </AvatarContainer>
  );
};

export const Avatar = forwardRef<HTMLDivElement, IProps>(AvatarComponent);
