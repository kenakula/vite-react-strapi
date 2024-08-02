import { loginAtom } from '@app/store/auth';
import { ILoginDataModel } from '@shared/models';
import { Field, Form, Formik } from 'formik';
import { useAtom } from 'jotai/index';
import { ReactElement } from 'react';

const DEFAULT_FORM_VALUES: ILoginDataModel = {
  identifier: '',
  password: '',
};

const LoginPage = (): ReactElement => {
  const [loginData, login] = useAtom(loginAtom);

  const onSubmit = async (data: ILoginDataModel): Promise<void> => {
    await login(data);
  };

  return (
    <div>
      <h1>Login Page</h1>
      {loginData && <p>{JSON.stringify(loginData)}</p>}
      <Formik<ILoginDataModel> initialValues={DEFAULT_FORM_VALUES} onSubmit={onSubmit}>
        <Form>
          <Field name="identifier" placeholder="email" />
          <Field name="password" placeholder="password" />

          <button type="submit">login</button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginPage;
