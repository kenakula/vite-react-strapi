import { BaseQueryFn, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Storage } from '@shared/utils';

const baseUrl = import.meta.env.VITE_API_BASE_URL;

export const baseQuery: BaseQueryFn = fetchBaseQuery({
  baseUrl,
  prepareHeaders: (headers) => {
    const token = Storage.read<string>('JWT_TOKEN');

    if (!token) return headers;

    headers.set('Authorization', `Bearer ${token}`);

    return headers;
  },
});
