import { renderWithProviders } from '@tests/render-with-providers';
import { expect } from 'vitest';

import { Header } from './header';

describe('HeaderTest', () => {
  test('should render links', () => {
    const { getByText } = renderWithProviders(<Header />);

    expect(getByText('HOME')).toBeVisible();
    expect(getByText('PROFILE')).toBeVisible();
    expect(getByText('LOGIN')).toBeVisible();
    expect(getByText('SIGNUP')).toBeVisible();
  });
});
