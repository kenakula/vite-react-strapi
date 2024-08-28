import { useSignupMutation } from '@app/store/auth/auth-api';
import { Anchor, Button, Stack, TextInput, Title } from '@mantine/core';
import { HOME_ROUTE, LOGIN_ROUTE } from '@shared/constants';
import { ISignupDataModel } from '@shared/models';
import { Field, Form, Formik } from 'formik';
import { ReactElement } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const DEFAULT_FORM_VALUES: ISignupDataModel = {
  email: '',
  username: '',
  password: '',
};

const SignupPage = (): ReactElement => {
  const [signup] = useSignupMutation();

  const navigate = useNavigate();

  const onSubmit = async (data: ISignupDataModel): Promise<void> => {
    await signup(data);

    navigate(HOME_ROUTE);
  };

  return (
    <>
      <Title component="h1" order={3}>Signup Page</Title>
      <Formik<ISignupDataModel> initialValues={DEFAULT_FORM_VALUES} onSubmit={onSubmit}>
        <Form>
          <TextInput component={Field} name="email" placeholder="email"/>
          <TextInput component={Field} name="username" placeholder="username"/>
          <TextInput component={Field} name="password" placeholder="password"/>

          <Button type="submit">create</Button>
        </Form>
      </Formik>
      <Stack align="center" gap={5}>
        <Anchor c="blue" component={Link} size="sm" to={LOGIN_ROUTE}>login</Anchor>
      </Stack>
    </>
  );
};

export default SignupPage;
