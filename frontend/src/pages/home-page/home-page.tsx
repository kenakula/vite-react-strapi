import { useAppStore } from '@app/store/app-store';
import { observer } from 'mobx-react-lite';
import { ReactElement, useEffect } from 'react';

const HomePage = (): ReactElement => {
  const { appVersion } = useAppStore();
  const { toggleColorMode, colorMode, getProjectData, projectData } = useAppStore();

  const fetchData = async (): Promise<void> => {
    await getProjectData();
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {projectData && <h1>{projectData.appTitle}</h1>}
      <p>HomePage: {appVersion}</p>
      <p>Color mode is: {colorMode}</p>
      <button onClick={toggleColorMode}>toggle</button>
    </div>
  );
};

export default observer(HomePage);
