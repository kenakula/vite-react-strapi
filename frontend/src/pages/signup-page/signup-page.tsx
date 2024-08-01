import { Field, Form, Formik, FormikValues } from 'formik';
import { ReactElement } from 'react';

const SignupPage = (): ReactElement => {

  const onSubmit = async (values: FormikValues): Promise<void> => {
    console.log(values);
  };

  return (
    <div>
      <h1>Signup Page</h1>
      <Formik initialValues={{ email: '', username: '', password: '' }} onSubmit={onSubmit}>
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
