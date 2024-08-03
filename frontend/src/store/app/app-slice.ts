import { appApi } from '@app/store/app/app-api';
import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { IAppData } from '@shared/interfaces';
import { TColorMode } from '@shared/types';

export interface IAppSlice {
  appName: string;
  colorMode: TColorMode;
}

const initialState: IAppSlice = {
  appName: 'AppName',
  colorMode: 'light',
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    toggleColorMode: (state) => {
      state.colorMode = state.colorMode === 'light' ? 'dark' : 'light';
    }
  },
  extraReducers: builder => {
    builder.addMatcher(
      appApi.endpoints.getAppData.matchFulfilled,
      (state, { payload }: PayloadAction<IAppData>) => {
        state.appName = payload.appTitle;
      }
    );
  }
});

// Action creators are generated for each case reducer function
export const { toggleColorMode } = appSlice.actions;

export const appReducer = appSlice.reducer;
