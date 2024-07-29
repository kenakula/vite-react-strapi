import { AppStore, AppStoreContext } from '@app/store/app-store/app-store';
import { useContext } from 'react';

export const useAppStore = (): AppStore => useContext(AppStoreContext)!;
