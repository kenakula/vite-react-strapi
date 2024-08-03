import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
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
    setAppName: (state, { payload }: PayloadAction<string>) => {
      state.appName = payload;
    },
    setColorMode: (state, { payload }: PayloadAction<TColorMode>) => {
      state.colorMode = payload;
    }
  },
});

// Action creators are generated for each case reducer function
export const { setAppName, setColorMode } = appSlice.actions;

export default appSlice.reducer;
