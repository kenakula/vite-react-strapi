import { useSignupMutation } from '@app/store/auth/auth-api';
import { Button, Title } from '@mantine/core';
import { HOME_ROUTE } from '@shared/constants';
import { ISignupDataModel } from '@shared/models';
import { Field, Form, Formik } from 'formik';
import { ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';

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
      <Title order={1}>Signup Page</Title>
      <Formik<ISignupDataModel> initialValues={DEFAULT_FORM_VALUES} onSubmit={onSubmit}>
        <Form>
          <Field name="email" placeholder="email"/>
          <Field name="username" placeholder="username"/>
          <Field name="password" placeholder="password"/>

          <Button type="submit">create</Button>
        </Form>
      </Formik>
    </>
  );
};

export default SignupPage;
