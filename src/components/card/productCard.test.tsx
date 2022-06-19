import { render, screen } from '@testing-library/react';

import { ProductsCard } from './productCard';

describe('Given the component ProductsCard', () => {
  describe('when it is calling', () => {
    test('should printi', () => {
      render(<ProductsCard />);
      const display = screen.getByText(/sazonador tortilla/i);
      expect(display).toBeInTheDocument();
    });
  });
});
