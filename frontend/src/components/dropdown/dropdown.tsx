import { getCoordinates } from '@components/dropdown/helpers';
import { ICoordinates, IMenuItem } from '@shared/interfaces';
import { TPosition } from '@shared/types';
import { MouseEvent, ReactElement, RefObject, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { useOnClickOutside } from 'usehooks-ts';

import { MenuItem } from './components';
import { DEFAULT_COORDINATES } from './constants';
import { DropdownContainer, DropdownList } from './styles';

interface IProps<T extends HTMLElement> {
  menuItems?: IMenuItem[];
  isOpen: boolean;
  triggerRef: RefObject<T>;
  position?: TPosition;
  closeOnClickOutside?: boolean;
  onClose: () => void;
}

export const Dropdown = <T extends HTMLElement>({
  isOpen,
  onClose,
  triggerRef,
  menuItems = [],
  position = 'bottomLeft',
  closeOnClickOutside = true,
}: IProps<T>): ReactElement | null => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [coordinates, setCoordinates] = useState<ICoordinates>(DEFAULT_COORDINATES);

  useEffect(() => {
    if (!triggerRef.current) return;

    const triggerRect = triggerRef.current.getBoundingClientRect();
    const coordinates = getCoordinates(position, triggerRect);

    setCoordinates(coordinates);
  }, [triggerRef]);

  const handleDropdownClick = (event: MouseEvent<HTMLDivElement>): void => {
    event.preventDefault();
    event.stopPropagation();
  };

  const handleOutsideClick = (): void => {
    closeOnClickOutside && onClose();
  };

  useOnClickOutside(dropdownRef, handleOutsideClick);

  if (!isOpen) return null;

  return createPortal(
    <DropdownContainer
      onClick={handleDropdownClick}
      $top={coordinates.top}
      $left={coordinates.left}
      $right={coordinates.right}
      ref={dropdownRef}
    >
      <DropdownList>
        {menuItems.map(item => <MenuItem key={item.id} item={item} onMenuItemClick={onClose} />)}
      </DropdownList>
    </DropdownContainer>,
    document.body,
  );
};
