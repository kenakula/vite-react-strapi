import { screen } from '@testing-library/react';
import { renderWithProviders } from '@tests/render-with-providers';

import { App } from './app';

vi.mock('@app/store/app-store', () => ({
  useAppStore: vi.fn().mockImplementation(() => ({
    colorMode: 'dark'
  }))
}));

describe('App', () => {
  it('renders the App component', () => {
    renderWithProviders(<App />);

    screen.debug();
  });
});
