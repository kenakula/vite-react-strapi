import { screen } from '@testing-library/dom';
import { renderWithProviders } from '@tests/render-with-providers';
import { beforeEach, expect } from 'vitest';

import { Container } from './container';

const { getByText, debug, getByTestId } = screen;

describe('ContainerTest', () => {
  beforeEach(() => {
    renderWithProviders(<Container className="test-className">ChildElements</Container>);

    debug();
  });

  test('should render child elements', () => {
    expect(getByText('ChildElements')).toBeVisible();
  });

  test('should render passed class name', () => {
    const container = getByTestId('container');

    expect(container).toHaveClass('test-className');
    expect(container).toHaveClass(/container/gi);
  });
});
