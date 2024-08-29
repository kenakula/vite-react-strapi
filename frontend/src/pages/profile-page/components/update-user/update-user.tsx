import { useAppDispatch } from '@app/store';
import { setUser } from '@app/store/auth';
import { useUpdateUserMutation } from '@app/store/users/users-api';
import { Button, Fieldset, TextInput } from '@mantine/core';
import { IUser } from '@shared/interfaces';
import { Field, Form, Formik } from 'formik';
import { ReactElement, useMemo } from 'react';

type TUpdateUserData = Partial<IUser>;

interface IProps {
  user: IUser | null;
}

export const UpdateUser = ({ user }: IProps): ReactElement => {
  const [updateUser, { isLoading }] = useUpdateUserMutation();

  const dispatch = useAppDispatch();

  const initialFormValues: TUpdateUserData = useMemo<TUpdateUserData>(() => ({
    email: user?.email,
    username: user?.username
  }), [user]);

  const handleSubmit = async (data: TUpdateUserData): Promise<void> => {
    try {
      const updateData = { ...user, ...data };

      const response = await updateUser(updateData).unwrap();
      dispatch(setUser(response));
    } catch (error) {
      console.log('error try: ', error);
    }
  };

  return (
    <Formik initialValues={initialFormValues} onSubmit={handleSubmit}>
      <Form>
        <Fieldset legend="Данные учетной записи">
          <TextInput component={Field} label="Почта" mb="sm" name="email" type="email" />
          <TextInput component={Field} label="Имя" mb="sm" name="username" type="text" />

          <Button disabled={isLoading} type="submit">Обновить</Button>
        </Fieldset>
      </Form>
    </Formik>
  );
};
