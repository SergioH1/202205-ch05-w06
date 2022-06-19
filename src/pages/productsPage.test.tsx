import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import ProductsPage from './productsPage';

describe('Given the pageProducts', () => {
  describe('when it is calling', () => {
    test('should printi', () => {
      render(
        <MemoryRouter>
          <ProductsPage />
        </MemoryRouter>
      );
      const display = screen.getByText(/Sazonador Tortilla/i);
      expect(display).toBeInTheDocument();
    });
  });
});
