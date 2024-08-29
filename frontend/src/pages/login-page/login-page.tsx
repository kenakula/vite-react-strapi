import { useLoginMutation } from '@app/store/auth/auth-api';
import { Anchor, Button, Stack, TextInput, Title } from '@mantine/core';
import { FORGOT_PASSWORD_ROUTE, HOME_ROUTE, SIGNUP_ROUTE } from '@shared/constants';
import { ILoginDataModel } from '@shared/models';
import { Field, Form, Formik } from 'formik';
import { ReactElement } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const DEFAULT_FORM_VALUES: ILoginDataModel = {
  identifier: '',
  password: '',
};

interface RedirectLocationState {
  redirectTo: Location;
}

const LoginPage = (): ReactElement => {
  const [login] = useLoginMutation();
  const navigate = useNavigate();
  const { state: locationState } = useLocation();

  const onSubmit = async (data: ILoginDataModel): Promise<void> => {
    try {
      await login(data).unwrap();

      if (locationState) {
        // state is any by default
        const { redirectTo } = locationState as RedirectLocationState;
        navigate(`${redirectTo.pathname}${redirectTo.search}`);

        return;
      }

      navigate(HOME_ROUTE);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Title component="h1" order={3}>Login Page</Title>
      <Formik<ILoginDataModel> initialValues={DEFAULT_FORM_VALUES} onSubmit={onSubmit}>
        <Form>
          <TextInput component={Field} name="identifier" placeholder="email" />
          <TextInput component={Field}  name="password" placeholder="password" />

          <Button type="submit">login</Button>
        </Form>
      </Formik>
      <Stack align="center" gap={5}>
        <Anchor c="blue" component={Link} size="sm" to={SIGNUP_ROUTE}>register</Anchor>
        <Anchor c="blue" component={Link} size="sm" to={FORGOT_PASSWORD_ROUTE}>forgot password</Anchor>
      </Stack>
    </>
  );
};

export default LoginPage;
