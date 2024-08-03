import { appStoreSelector, useAppSelector } from '@app/store';
import { ReactElement } from 'react';

export const ColorMode = (): ReactElement => {
  const { colorMode } = useAppSelector(appStoreSelector);

  return (
    <p>Color mode is: {colorMode}</p>
  );
};
