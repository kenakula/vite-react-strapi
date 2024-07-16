import { useAppStore } from '@app/store/app-store';
import { BaseLayout } from '@components/layout';
import { ReactElement } from 'react';

export const HomePage = (): ReactElement => {
  const { appVersion } = useAppStore();
  const { toggleColorMode, colorMode } = useAppStore();

  return (
    <BaseLayout>
      <p>HomePage: {appVersion}</p>
      <p>Color mode is: {colorMode}</p>
      <button onClick={toggleColorMode}>toggle</button>
    </BaseLayout>
  );
};
