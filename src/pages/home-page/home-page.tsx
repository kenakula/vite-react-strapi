import { useAppStore } from '@app/store/app-store';
import { Menu } from '@components/menu/menu';
import { ReactElement } from 'react';

export const HomePage = (): ReactElement => {
  const { appVersion } = useAppStore();
  const { toggleColorMode } = useAppStore();

  return (
    <div>
      <Menu/>
      <p>HomePage: {appVersion}</p>
      <button onClick={toggleColorMode}>toggle</button>
    </div>
  );
};
