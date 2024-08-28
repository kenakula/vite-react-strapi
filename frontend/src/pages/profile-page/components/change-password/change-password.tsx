import { useChangePasswordMutation } from '@app/store/auth';
import { Button, Fieldset, TextInput } from '@mantine/core';
import { IChangePasswordDataModel } from '@shared/models';
import { Field, Form, Formik, FormikHelpers } from 'formik';
import { ReactElement } from 'react';

const FORM_DEFAULT_DATA: IChangePasswordDataModel = {
  currentPassword: '',
  password: '',
  passwordConfirmation: '',
};

type TChangePasswordHelpers = FormikHelpers<IChangePasswordDataModel>

export const ChangePassword = (): ReactElement => {
  const [changePassword, { isLoading }] = useChangePasswordMutation();

  const onSubmit = async (data: IChangePasswordDataModel, { resetForm }: TChangePasswordHelpers): Promise<void> => {
    try {
      const res = await changePassword(data).unwrap();
      resetForm();
      console.log(res);
    } catch (error) {
      console.log('error try: ', error);
    }
  };

  return (
    <Formik<IChangePasswordDataModel> initialValues={FORM_DEFAULT_DATA} onSubmit={onSubmit}>
      <Form>
        <Fieldset legend="Сменить пароль">
          <TextInput component={Field} label="Текущий пароль" mb="sm" name="currentPassword" type="password" />
          <TextInput component={Field} label="Новый пароль"  mb="sm" name="password" type="password" />
          <TextInput component={Field} label="Повторите новый пароль" mb="md" name="passwordConfirmation" type="password" />

          <Button disabled={isLoading} type="submit">Сменить пароль</Button>
        </Fieldset>
      </Form>
    </Formik>
  );
};
