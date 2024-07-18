import { TColorMode } from '@shared/types';
import { makeAutoObservable } from 'mobx';
import { createContext, PropsWithChildren, ReactElement } from 'react';

export class AppStore {
  private readonly _appVersion = import.meta.env.VITE_APP_VERSION;

  constructor() {
    makeAutoObservable(this);
  }

  private _colorMode: TColorMode = 'light';

  get colorMode(): TColorMode {
    return this._colorMode;
  }

  get appVersion(): string {
    return this._appVersion;
  }

  public toggleColorMode = (): void => {
    this._colorMode = this._colorMode === 'light' ? 'dark' : 'light';
  };
}

export const AppStoreContext = createContext<AppStore | null>(null);
export const AppStoreProvider = ({ children }: PropsWithChildren): ReactElement =>
  <AppStoreContext.Provider value={new AppStore()}>{children}</AppStoreContext.Provider>;
