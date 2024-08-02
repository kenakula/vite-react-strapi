import { TColorMode } from '@shared/types';
import { atomWithRefresh, atomWithStorage } from 'jotai/vanilla/utils';

import { COLOR_MODE_KEY } from './keys';

export const appColorModeAtom = atomWithStorage<TColorMode>(COLOR_MODE_KEY, 'light');

export const appDataAtom = atomWithRefresh<any>(async () => {
  try {
    const response = await fetch('/api/project-data');

    return response.json();
  } catch (error) {
    console.error(error);
  }
});
