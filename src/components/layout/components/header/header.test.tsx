import { Header } from '@components/layout/components';
import { render } from '@testing-library/react';

describe('HeaderTest', () => {
  test('should render text', () => {
    const header = render(<Header />);
    expect(header.getByText('Header'));
  });
});
