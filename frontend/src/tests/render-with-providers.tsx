import { AppStoreProvider } from '@app/store/app-store';
import { render, RenderResult } from '@testing-library/react';
import { ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';

export const renderWithProviders = (ui: ReactNode): RenderResult => render(
  <BrowserRouter>
    <AppStoreProvider>{ui}</AppStoreProvider>
  </BrowserRouter>
);
