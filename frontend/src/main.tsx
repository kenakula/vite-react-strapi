import './styles/global.module.css';

import { AppStoreProvider } from '@app/store/app-store';
import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from './app';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppStoreProvider>
      <App />
    </AppStoreProvider>
  </React.StrictMode>,
);
