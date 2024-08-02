import { IAppData } from '@shared/interfaces';
import { IStrapiResponse } from '@shared/models';
import { TColorMode } from '@shared/types';
import { api } from '@shared/utils';
import { AxiosResponse } from 'axios';
import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/vanilla/utils';

import { COLOR_MODE_KEY } from './keys';

export const appColorModeAtom = atomWithStorage<TColorMode>(COLOR_MODE_KEY, 'light');

export const appDataAtom = atom<IAppData | null>(null);
export const getAppDataAtom = atom(
  get => get(appDataAtom),
  async (_get, set): Promise<void> => {
    try {
      const { data: { data } } = await strapiGet<IAppData>('/project-data');

      set(appDataAtom, data);
    } catch (error) {
      console.error('Error getAppDataAtom');
    }
  }
);

const strapiGet = async  <T,>(url: string): Promise<AxiosResponse<IStrapiResponse<T>>> => {
  return api.get<IStrapiResponse<T>>(url);
};
