import { useAppDispatch, useAppSelector } from '@app/store';
import { useGetAppDataQuery } from '@app/store/app/app-api';
import { setAppName, setColorMode } from '@app/store/app/app-slice';
import { ReactElement, useEffect } from 'react';

import { ColorMode } from './color-mode';

const HomePage = (): ReactElement => {
  const { appName, colorMode } = useAppSelector(state => state.app);
  const { data, isLoading } = useGetAppDataQuery();
  const dispatch = useAppDispatch();

  const handleChangeColorMode = (): void => {
    dispatch(setColorMode(colorMode === 'dark' ? 'light' : 'dark'));
  };

  useEffect(() => {
    if (data) {
      dispatch(setAppName(data.appTitle));
    }
  }, [data]);

  if (isLoading) return <h1>Loading ...</h1>;

  return (
    <div>
      <h1>{appName}</h1>
      <ColorMode />
      <button onClick={handleChangeColorMode}>change</button>
    </div>
  );
};

export default HomePage;
