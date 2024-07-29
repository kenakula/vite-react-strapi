import { useAppStore } from '@app/store/app-store';
import { ReactElement, useEffect } from 'react';

const HomePage = (): ReactElement => {
  const { appVersion } = useAppStore();
  const { toggleColorMode, colorMode } = useAppStore();

  const fetchData = async (): Promise<void> => {
    fetch('http://localhost:1337/api/project-data').then(res => res.json()).then(data => {
      console.log(data);
    });
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

export default HomePage;
