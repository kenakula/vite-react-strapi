import { BaseQueryFn, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Storage } from '@shared/utils';

export const baseQuery: BaseQueryFn = fetchBaseQuery({
  baseUrl: '/api',
  prepareHeaders: (headers) => {
    const token = Storage.read<string>('JWT_TOKEN');

    if (!token) return headers;

    headers.set('Authorization', `Bearer ${token}`);

    return headers;
  },
});
