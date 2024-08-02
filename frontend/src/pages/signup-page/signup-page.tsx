import { signupAtom } from '@app/store/auth';
import { ISignupDataModel } from '@shared/models';
import { Field, Form, Formik } from 'formik';
import { useAtom } from 'jotai';
import { ReactElement } from 'react';

const DEFAULT_FORM_VALUES: ISignupDataModel = {
  email: '',
  username: '',
  password: '',
};

const SignupPage = (): ReactElement => {
  const [signupData, signup] = useAtom(signupAtom);

  const onSubmit = async (data: ISignupDataModel): Promise<void> => {
    await signup(data as any);
  };

  return (
    <div>
      <h1>Signup Page</h1>
      {signupData && <p>{JSON.stringify(signupData)}</p>}
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
