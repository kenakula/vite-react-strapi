import { screen } from '@testing-library/dom';
import { renderWithProviders } from '@tests/render-with-providers';
import { beforeEach, expect } from 'vitest';

import { BaseLayout } from './base-layout';

const { getByTestId } = screen;

describe('BaseLayoutTest', () => {
  beforeEach(() => {
    renderWithProviders(<BaseLayout />);
  });

  test('should render header in layout', () => {
    expect(getByTestId('header')).toBeVisible();
  });
});
