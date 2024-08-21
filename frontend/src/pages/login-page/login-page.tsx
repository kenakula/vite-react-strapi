import { useLoginMutation } from '@app/store/auth/auth-api';
import { ILoginDataModel } from '@shared/models';
import { Field, Form, Formik } from 'formik';
import { ReactElement } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const DEFAULT_FORM_VALUES: ILoginDataModel = {
  identifier: '',
  password: '',
};

interface RedirectLocationState {
  redirectTo: Location;
}

const LoginPage = (): ReactElement => {
  const [login, { data }] = useLoginMutation();
  const navigate = useNavigate();
  const { state: locationState } = useLocation();

  const onSubmit = async (data: ILoginDataModel): Promise<void> => {
    await login(data);

    if (locationState) {
      // state is any by default
      const { redirectTo } = locationState as RedirectLocationState;
      navigate(`${redirectTo.pathname}${redirectTo.search}`);
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      {data && <p>{JSON.stringify(data.user)}</p>}
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
