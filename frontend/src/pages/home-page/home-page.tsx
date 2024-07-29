import { useAppStore } from '../../store/app-store';
import { ReactElement } from 'react';

const HomePage = (): ReactElement => {
  const { appVersion } = useAppStore();
  const { toggleColorMode, colorMode } = useAppStore();

  return (
    <div>
      <p>HomePage: {appVersion}</p>
      <p>Color mode is: {colorMode}</p>
      <button onClick={toggleColorMode}>toggle</button>
    </div>
  );
};

export default HomePage;
