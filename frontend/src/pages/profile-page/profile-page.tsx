import { Grid, Title, VisuallyHidden } from '@mantine/core';
import { ChangePassword } from '@pages/profile-page/components';
import { ReactElement } from 'react';

const ProfilePage = (): ReactElement => {

  return (
    <div className="profile-page">
      <VisuallyHidden>
        <Title mb="sm" order={1}>Profile Page</Title>
      </VisuallyHidden>
      <Grid>
        <Grid.Col span={{ base: 12, sm: 6 }}>
          <ChangePassword />
        </Grid.Col>
      </Grid>
    </div>
  );
};

export default ProfilePage;
