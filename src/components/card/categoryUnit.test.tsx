import { render, screen } from '@testing-library/react';
import { CategoryUnit } from './categoryUnit';

describe('Given the component CategoryUnit', () => {
  describe('when it is calling', () => {
    test('should printi', () => {
      render(<CategoryUnit />);
      const display = screen.getByText(/sazonador tortilla/i);
      expect(display).toBeInTheDocument();
    });
  });
});
