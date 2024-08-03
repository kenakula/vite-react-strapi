import { baseQuery } from '@app/store/utils';
import { createApi } from '@reduxjs/toolkit/query/react';
import { IAppData } from '@shared/interfaces';
import { IStrapiResponse } from '@shared/models';

export const appApi = createApi({
  reducerPath: 'appApi',
  baseQuery,
  endpoints: builder => ({
    getAppData: builder.query<IAppData, void>({
      query: () => ({ url: '/project-data' }),
      transformResponse: (data: IStrapiResponse<IAppData>) => {
        return data.data;
      }
    })
  })
});

export const { useGetAppDataQuery } = appApi;
