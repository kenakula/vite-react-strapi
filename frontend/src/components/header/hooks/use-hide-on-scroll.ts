import { RefObject, useCallback, useRef, useState } from 'react';
import { useDebounceCallback, useEventListener } from 'usehooks-ts';

interface IHookProps {
  enabled?: boolean;
  headerRef: RefObject<HTMLHeadingElement>;
}

interface IHookValue {
  isVisible: boolean;
}

export const useHideOnScroll = ({ enabled = true, headerRef }: IHookProps): IHookValue => {
  const position = useRef(document.documentElement.scrollTop);
  const [isVisible, setIsVisible] = useState<boolean>(true );

  const handleScrollEvent = useCallback((): void => {
    if (!headerRef.current) return;

    const newPosition = document.documentElement.scrollTop;

    setIsVisible(position.current > newPosition);
    position.current = newPosition;
  }, []);

  const debouncedHandleScrollEvent = useDebounceCallback(handleScrollEvent, 100);
  enabled && useEventListener('scroll', debouncedHandleScrollEvent);

  return {
    isVisible
  };
};
