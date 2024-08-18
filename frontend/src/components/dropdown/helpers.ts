import { ICoordinates } from '@shared/interfaces';
import { TPosition } from '@shared/types';

import { DEFAULT_COORDINATES, TOP_OFFSET } from './constants';

export const getCoordinates = (position: TPosition, { bottom, right }: DOMRect): ICoordinates => {
  const windowWidth = window.innerWidth;

  switch (position) {
    case 'bottomLeft':
      return { top: bottom + TOP_OFFSET, left: 0 };
    case 'bottomRight':
      return { top: bottom + TOP_OFFSET, right: windowWidth - right };
    default:
      return DEFAULT_COORDINATES;
  }
};
