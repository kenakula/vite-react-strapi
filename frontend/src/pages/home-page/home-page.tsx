import { appColorModeAtom, appDataAtom } from '@app/store/app';
import { useAtom, useSetAtom } from 'jotai';
import { ReactElement } from 'react';

import { ColorMode } from './color-mode';

const HomePage = (): ReactElement => {
  const setColorMode = useSetAtom(appColorModeAtom);
  const [appData, refresh ] = useAtom(appDataAtom);

  const handleChangeColorMode = (): void => {
    setColorMode('dark');
  };

  return (
    <div>
      <h1>MainPage</h1>
      <p>appData: {JSON.stringify(appData)}</p>
      <ColorMode />
      <button onClick={handleChangeColorMode}>change</button>
      <button onClick={() => refresh()}>refresh</button>
    </div>
  );
};

export default HomePage;
