import { ReactNode } from 'react';

export interface IMenuItem {
  id: string;
  text: string;
  icon?: ReactNode;
  link?: string;
  onClick?: () => void;
  type?: 'item' | 'line';
}
