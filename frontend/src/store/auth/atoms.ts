import { IAuthResponseModel, ILoginDataModel, ISignupDataModel, IStrapiErrorModel } from '@shared/models';
import { api, getAxiosError } from '@shared/utils';
import { AxiosResponse } from 'axios';
import { atom } from 'jotai';

const signupResponseAtom = atom<IAuthResponseModel | null>(null);
export const signupAtom = atom(
  (get) => get(signupResponseAtom),
  async (_get, set, data: ISignupDataModel) => {
    const response = await fetch('http://localhost:1337/api/auth/local/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    }).then(res => res.json());

    set(signupResponseAtom, response);
  },
);

const loginResponseAtom = atom<IAuthResponseModel | null>(null);
export const loginAtom = atom(
  (get) => get(loginResponseAtom),
  async (_get, set, data: ILoginDataModel) => {
    try {
      const result = await api
        .post<ILoginDataModel, AxiosResponse<IAuthResponseModel>>('/auth/local', data);

      set(loginResponseAtom, result.data);
    } catch (error) {
      const errorData = getAxiosError<IStrapiErrorModel>(error);

      console.error('Error loginAtom: ', errorData?.error);
    }
  }
);
