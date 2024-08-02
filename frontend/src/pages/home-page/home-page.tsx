import { ReactElement } from 'react';

import { ColorMode } from './color-mode';

const HomePage = (): ReactElement => {

  const handleChangeColorMode = (): void => {
    // setColorMode('dark');
  };

  return (
    <div>
      <h1>MainPage</h1>
      {/*<p>appData: {appData?.appTitle}</p>*/}
      <ColorMode />
      <button onClick={handleChangeColorMode}>change</button>
    </div>
  );
};

export default HomePage;
