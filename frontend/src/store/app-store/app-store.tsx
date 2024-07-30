import { TColorMode } from '@shared/types';
import { axiosInstance } from '@shared/utils';
import { AxiosResponse } from 'axios';
import { makeAutoObservable, runInAction } from 'mobx';
import { createContext, PropsWithChildren, ReactElement } from 'react';

interface IProjectData {
  appTitle: string;
}

export class AppStore {
  public projectData: IProjectData | null = null;
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

  public getProjectData = async (): Promise<void> => {
    const { data: { data } } = await axiosInstance.inst.get<AxiosResponse<IProjectData>>('/project-data');

    runInAction(() => {
      this.projectData = data;
    });
  };
}

export const AppStoreContext = createContext<AppStore | null>(null);
export const AppStoreProvider = ({ children }: PropsWithChildren): ReactElement =>
  <AppStoreContext.Provider value={new AppStore()}>{children}</AppStoreContext.Provider>;
