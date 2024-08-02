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
