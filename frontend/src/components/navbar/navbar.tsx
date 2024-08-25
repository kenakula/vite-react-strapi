import { ActionIcon, AppShell } from '@mantine/core';
import IconArrowBarRight from '@shared/media/icons/arrot-bar-right.svg?react';
import clsx from 'clsx';
import { ReactElement } from 'react';

import classes from './navbar.module.css';

interface IProps {
  isMinimized: boolean;
  handleMinimize: () => void;
}

export const Navbar = ({ isMinimized, handleMinimize }: IProps): ReactElement => {
  return (

    <AppShell.Navbar>
      <ActionIcon
        className={clsx({ [classes.expanded]: !isMinimized })}
        color="gray"
        variant="transparent"
        visibleFrom="sm"
        onClick={handleMinimize}
      >
        <IconArrowBarRight/>
      </ActionIcon>
    </AppShell.Navbar>
  );
};
