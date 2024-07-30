import { useAppStore } from '@app/store/app-store';
import { observer } from 'mobx-react-lite';
import { ReactElement, useEffect } from 'react';

const HomePage = (): ReactElement => {
  const { appVersion } = useAppStore();
  const { toggleColorMode, colorMode } = useAppStore();

  const fetchData = async (): Promise<void> => {
    const data = await fetch('/api/project-data').then(res => res.json());
    console.log('=>(home-page.tsx:11) data', data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <p>HomePage: {appVersion}</p>
      <p>Color mode is: {colorMode}</p>
      <button onClick={toggleColorMode}>toggle</button>
    </div>
  );
};

export default observer(HomePage);
