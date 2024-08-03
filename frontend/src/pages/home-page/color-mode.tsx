import { useAppSelector } from '@app/store';
import { ReactElement } from 'react';

export const ColorMode = (): ReactElement => {
  const { colorMode } = useAppSelector(state => state.app);

  return (
    <p>Color mode is: {colorMode}</p>
  );
};
