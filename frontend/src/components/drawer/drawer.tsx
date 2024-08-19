import { ReactElement } from 'react';
import { createPortal } from 'react-dom';

import { DrawerContainer } from './styles';

interface IProps {
  isOpen: boolean;
}

export const Drawer = ({ isOpen }: IProps): ReactElement | null => {

  const mainElement = document.querySelector('main');

  if (!mainElement) return null;

  return createPortal(
    <DrawerContainer $isOpen={isOpen}>
      Drawer
    </DrawerContainer>,
    mainElement
  );
};
