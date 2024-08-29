import { baseQuery } from '@app/store/utils';
import { createApi } from '@reduxjs/toolkit/query/react';

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery,
  endpoints: builder => ({
    updateUser: builder.mutation({
      query: data => ({
        url: `/users/${data.id}`,
        method: 'PUT',
        body: data
      })
    })
  })
});

export const { useUpdateUserMutation } = usersApi;
