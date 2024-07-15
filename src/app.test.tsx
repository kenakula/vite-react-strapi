import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';

import { App } from './app';

describe('test app', () => {
  it('true to be true', () => {
    render(<App />);
    screen.debug();
  });
});
