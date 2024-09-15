import { ErrorMessages } from '@shared/constants';
import { ILoginDataModel } from '@shared/models';
import { object, string } from 'yup';

const { REQUIRED, INVALID_EMAIL } = ErrorMessages;

export const DEFAULT_LOGIN_FORM_VALUES: ILoginDataModel = {
  identifier: '',
  password: '',
};

export const loginSchema = object({
  identifier: string().required(REQUIRED).email(INVALID_EMAIL),
  password: string().required(REQUIRED),
});
