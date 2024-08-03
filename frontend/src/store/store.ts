import { authApi } from '@app/store/auth/auth-api';
import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import { appApi, IAppSlice } from './app';
import { appReducer } from './app';
import { authReducer, IAuthSlice } from './auth';

export const store = configureStore({
  reducer: {
    app: appReducer,
    auth: authReducer,
    [appApi.reducerPath]: appApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
    appApi.middleware,
    authApi.middleware,
  )
});

setupListeners(store.dispatch);

export type TRootState = ReturnType<typeof store.getState>
export type TAppDispatch = typeof store.dispatch

// selectors

export const appStoreSelector = (state: TRootState): IAppSlice => state.app;
export const authStoreSelector = (state: TRootState): IAuthSlice => state.auth;
