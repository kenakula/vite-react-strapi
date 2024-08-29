import { authStoreSelector, useAppSelector } from '@app/store';
import { Grid, Title, VisuallyHidden } from '@mantine/core';
import { ReactElement } from 'react';

import { ChangePassword, UpdateUser } from './components';

const ProfilePage = (): ReactElement => {
  const { user } = useAppSelector(authStoreSelector);

  return (
    <div className="profile-page">
      <VisuallyHidden>
        <Title mb="sm" order={1}>Profile Page</Title>
      </VisuallyHidden>
      <Grid>
        <Grid.Col span={{ base: 12, sm: 6 }}>
          <ChangePassword />
        </Grid.Col>
        <Grid.Col span={{ base: 12, sm: 6 }}>
          <UpdateUser user={user} />
        </Grid.Col>
      </Grid>
    </div>
  );
};

export default ProfilePage;
