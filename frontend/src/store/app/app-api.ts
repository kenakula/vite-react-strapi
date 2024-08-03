import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IAppData } from '@shared/interfaces';
import { IStrapiResponse } from '@shared/models';

export const appApi = createApi({
  reducerPath: 'appApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '/api'
  }),
  endpoints: builder => ({
    getAppData: builder.query<IAppData, void>({
      query: () => '/project-data',
      transformResponse: (data: IStrapiResponse<IAppData>) => {
        return data.data;
      }
    })
  })
});

export const { useGetAppDataQuery } = appApi;
