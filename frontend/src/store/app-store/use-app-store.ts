import { useContext } from 'react';

import { AppStore, AppStoreContext } from './app-store';

export const useAppStore = (): AppStore => useContext(AppStoreContext)!;
