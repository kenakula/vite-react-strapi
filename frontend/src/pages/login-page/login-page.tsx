import { useLoginMutation } from '@app/store/auth/auth-api';
import { Anchor, Button, Stack, TextInput, Title } from '@mantine/core';
import { FORGOT_PASSWORD_ROUTE, SIGNUP_ROUTE } from '@shared/constants';
import { useNotification } from '@shared/hooks';
import { IQueryError } from '@shared/interfaces';
import { ILoginDataModel } from '@shared/models';
import { Field, Form, Formik } from 'formik';
import { ReactElement } from 'react';
import { Link } from 'react-router-dom';

import { DEFAULT_LOGIN_FORM_VALUES, loginSchema } from './constants';
import { useRedirect } from './use-redirect';

const LoginPage = (): ReactElement => {
  const [login] = useLoginMutation();
  const { handleRedirect } = useRedirect();
  const { showNotification } = useNotification();

  const onSubmit = async (data: ILoginDataModel): Promise<void> => {
    try {
      await login(data).unwrap();

      handleRedirect();
    } catch (error) {
      const err = error as IQueryError;
      showNotification({ title: 'Ошибка входа', message: err.data.error.message, severity: 'danger' });
    }
  };

  return (
    <>
      <Title component="h1" order={3}>Вход в аккаунт</Title>
      <Formik<ILoginDataModel> initialValues={DEFAULT_LOGIN_FORM_VALUES} validationSchema={loginSchema} onSubmit={onSubmit}>
        {({ errors, touched }) => (
          <Form>
            <TextInput
              component={Field} error={touched.identifier && errors.identifier} name="identifier"
              placeholder="email"
            />
            <TextInput
              component={Field} error={touched.password && errors.password} name="password"
              placeholder="password"
            />

            <Button type="submit">Войти</Button>
          </Form>
        )}
      </Formik>
      <Stack align="center" gap={5}>
        <Anchor c="blue" component={Link} size="sm" to={SIGNUP_ROUTE}>нет аккаунта?</Anchor>
        <Anchor c="blue" component={Link} size="sm" to={FORGOT_PASSWORD_ROUTE}>забыли пароль?</Anchor>
      </Stack>
    </>
  );
};

export default LoginPage;
