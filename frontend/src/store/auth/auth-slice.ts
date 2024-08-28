import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '@shared/interfaces';
import { IAuthResponseModel } from '@shared/models';
import { Storage } from '@shared/utils';

import { authApi } from './auth-api';

export interface IAuthSlice {
  user: IUser | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  token: string | null;
}

const DEFAULT_AUTH_STATE: IAuthSlice = {
  user: null,
  isAuthenticated: false,
  isLoading: false,
  token: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: DEFAULT_AUTH_STATE,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;

      Storage.clear('JWT_TOKEN');
    }
  },
  extraReducers: builder => {
    builder.addMatcher(
      authApi.endpoints.login.matchFulfilled,
      (state, { payload }: PayloadAction<IAuthResponseModel>) => {
        state.user = payload.user;
        state.token = payload.jwt;
        state.isAuthenticated = true;

        Storage.write('JWT_TOKEN', payload.jwt);
      }
    );
    builder.addMatcher(
      authApi.endpoints.signup.matchFulfilled,
      (state, { payload }: PayloadAction<IAuthResponseModel>) => {
        state.user = payload.user;
        state.token = payload.jwt;
        state.isAuthenticated = true;

        Storage.write('JWT_TOKEN', payload.jwt);
      }
    );
    builder.addMatcher(
      authApi.endpoints.getMe.matchPending,
      (state) => {
        state.isLoading = true;
      }
    );
    builder.addMatcher(
      authApi.endpoints.getMe.matchRejected,
      (state) => {
        state.isLoading = false;
      }
    );
    builder.addMatcher(
      authApi.endpoints.getMe.matchFulfilled,
      (state, { payload }: PayloadAction<IUser>) => {
        state.user = payload;
        state.isAuthenticated = true;
        state.isLoading = false;
      }
    );
    builder.addMatcher(
      authApi.endpoints.changePassword.matchFulfilled,
      (state, { payload: { user, jwt } }: PayloadAction<IAuthResponseModel>) => {
        state.user = user;
        state.token = jwt;
        state.isAuthenticated = true;

        Storage.write('JWT_TOKEN', jwt);
      }
    );
  }
});

export const { logout } = authSlice.actions;
export const authReducer = authSlice.reducer;
