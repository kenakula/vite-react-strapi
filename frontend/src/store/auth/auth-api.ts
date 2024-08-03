import { baseQuery } from '@app/store/utils';
import { createApi } from '@reduxjs/toolkit/query/react';
import { IUser } from '@shared/interfaces';
import { IAuthResponseModel, ILoginDataModel, ISignupDataModel } from '@shared/models';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery,
  endpoints: builder => ({
    login: builder.mutation<IAuthResponseModel, ILoginDataModel>({
      query: data => ({
        url: '/auth/local',
        method: 'POST',
        body: data
      })
    }),
    signup: builder.mutation<IAuthResponseModel, ISignupDataModel>({
      query: data => ({
        url: '/auth/local/register',
        method: 'POST',
        body: data
      })
    }),
    getMe: builder.query<IUser, void>({
      query: () => ({ url: '/users/me' })
    }),
  })
});

export const { useLoginMutation, useSignupMutation, useGetMeQuery } = authApi;
