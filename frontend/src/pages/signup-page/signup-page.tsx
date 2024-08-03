import { useSignupMutation } from '@app/store/auth/auth-api';
import { ISignupDataModel } from '@shared/models';
import { Field, Form, Formik } from 'formik';
import { ReactElement } from 'react';

const DEFAULT_FORM_VALUES: ISignupDataModel = {
  email: '',
  username: '',
  password: '',
};

const SignupPage = (): ReactElement => {
  const [signup, { data }] = useSignupMutation();

  const onSubmit = async (data: ISignupDataModel): Promise<void> => {
    await signup(data);
  };

  return (
    <div>
      <h1>Signup Page</h1>
      {data && <p>{JSON.stringify(data)}</p>}
      <Formik<ISignupDataModel> initialValues={DEFAULT_FORM_VALUES} onSubmit={onSubmit}>
        <Form>
          <Field name="email" placeholder="email" />
          <Field name="username" placeholder="username" />
          <Field name="password" placeholder="password" />

          <button type="submit">create</button>
        </Form>
      </Formik>
    </div>
  );
};

export default SignupPage;
