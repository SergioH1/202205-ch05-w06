import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';

import UnitPage from './unitPage.';

describe('Given the page Unit', () => {
  describe('when it is calling', () => {
    test('should printi', () => {
      render(
        <MemoryRouter>
          <UnitPage />
        </MemoryRouter>
      );
      const display = screen.getByText(/Sazonador Tortilla/i);
      expect(display).toBeInTheDocument();
    });
  });
});
