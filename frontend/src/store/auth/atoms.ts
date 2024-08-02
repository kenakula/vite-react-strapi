import { IAuthResponseModel,ILoginDataModel, ISignupDataModel } from '@shared/models';
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
    const response = await fetch('http://localhost:1337/api/auth/local', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    }).then(res => res.json());

    set(loginResponseAtom, response);
  }
);
