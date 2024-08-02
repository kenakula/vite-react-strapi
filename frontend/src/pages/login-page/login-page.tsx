import { ILoginDataModel } from '@shared/models';
import { Field, Form, Formik } from 'formik';
import { ReactElement } from 'react';

const DEFAULT_FORM_VALUES: ILoginDataModel = {
  identifier: '',
  password: '',
};

const LoginPage = (): ReactElement => {
  const onSubmit = async (data: ILoginDataModel): Promise<void> => {
    console.log('=>(login-page.tsx:14) data', data);
  };

  return (
    <div>
      <h1>Login Page</h1>
      {/*{loginData && <p>{JSON.stringify(loginData.user)}</p>}*/}
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
