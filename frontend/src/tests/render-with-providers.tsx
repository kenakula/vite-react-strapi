import { store } from '@app/store';
import { render, RenderResult } from '@testing-library/react';
import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

export const renderWithProviders = (ui: ReactNode): RenderResult => render(
  <BrowserRouter>
    <Provider store={store}>{ui}</Provider>
  </BrowserRouter>
);
