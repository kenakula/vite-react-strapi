import { appColorModeAtom } from '@app/store/app';
import { useAtomValue } from 'jotai';
import { ReactElement } from 'react';

export const ColorMode = (): ReactElement => {
  const colorMode = useAtomValue(appColorModeAtom);

  return (
    <p>Color mode is: {colorMode}</p>
  );
};
