import { appStoreSelector, authStoreSelector, useAppDispatch, useAppSelector } from '@app/store';
import { toggleColorMode } from '@app/store/app';
import { Container } from '@components/layout';
import { ReactElement } from 'react';

import { ColorMode } from './color-mode';

const HomePage = (): ReactElement => {
  const { appName } = useAppSelector(appStoreSelector);
  const { user } = useAppSelector(authStoreSelector);
  const dispatch = useAppDispatch();

  const handleChangeColorMode = (): void => {
    dispatch(toggleColorMode());
  };

  return (
    <Container className="home-page">
      <h1>{appName}</h1>
      <h3>{user?.email}</h3>
      <ColorMode />
      <button onClick={handleChangeColorMode}>change</button>
    </Container>
  );
};

export default HomePage;
