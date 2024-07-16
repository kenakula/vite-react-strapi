import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';

import { App } from './app';

vi.mock('@app/store/app-store', () => ({
  useAppStore: vi.fn().mockImplementation(() => ({
    colorMode: 'dark'
  }))
}));

describe('App', () => {
  it('renders the App component', () => {
    render(<App />);

    screen.debug(); // prints out the jsx in the App component unto the command line
  });
});
