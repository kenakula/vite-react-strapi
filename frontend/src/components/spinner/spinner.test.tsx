import { screen } from '@testing-library/dom';
import { renderWithProviders } from '@tests/render-with-providers';
import { beforeEach, expect } from 'vitest';

import { Spinner } from './spinner';

const { getByTestId } = screen;

describe('SpinnerTest', () => {
  beforeEach(() => {
    renderWithProviders(<Spinner />);
  });

  test('should render spinner', () => {
    expect(getByTestId('spinner')).toBeVisible();
  });

  test('should match snapshot', () => {
    expect(getByTestId('spinner')).toMatchSnapshot();
  });
});
