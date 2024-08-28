import { useForgotPasswordMutation } from '@app/store/auth';
import { Anchor, Button, Stack, Title } from '@mantine/core';
import { LOGIN_ROUTE } from '@shared/constants';
import { IForgotPasswordDataModel } from '@shared/models';
import { Field, Form, Formik } from 'formik';
import { ReactElement } from 'react';
import { Link } from 'react-router-dom';

const DEFAULT_FORM_DATA: IForgotPasswordDataModel = {
  email: '',
};

const ForgotPasswordPage = (): ReactElement => {
  const [forgotPassword] = useForgotPasswordMutation();

  const onSubmit = (data: IForgotPasswordDataModel): void => {
    forgotPassword(data);
  };

  return (
    <>
      <Title order={1}>Forgot password?</Title>
      <Formik<IForgotPasswordDataModel> initialValues={DEFAULT_FORM_DATA} onSubmit={onSubmit}>
        <Form>
          <Field name="email" placeholder="email" />

          <Button type="submit">reset password</Button>
        </Form>
      </Formik>
      <Stack align="center" gap={5}>
        <Anchor c="blue" component={Link} size="sm" to={LOGIN_ROUTE}>login</Anchor>
      </Stack>
    </>
  );
};

export default ForgotPasswordPage;
