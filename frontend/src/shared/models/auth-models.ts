import { IUser } from '@shared/interfaces';

export interface ISignupDataModel {
  email: string;
  username: string;
  password: string;
}

export interface ILoginDataModel {
  identifier: string;
  password: string;
}

export interface IAuthResponseModel {
  jwt: string;
  user: IUser
}

export interface IForgotPasswordDataModel {
  email: string;
}

export interface IForgotPasswordResponseModel {
  ok: boolean;
}

export interface IChangePasswordDataModel {
  currentPassword: string;
  password: string;
  passwordConfirmation: string;
}
