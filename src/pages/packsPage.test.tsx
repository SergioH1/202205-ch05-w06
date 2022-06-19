import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';

import Packs from './packsPage';

describe('Given the page Pack', () => {
  describe('when it is calling', () => {
    test('should printi', () => {
      render(
        <MemoryRouter>
          <Packs />
        </MemoryRouter>
      );
      const display = screen.getByText(/Set Novedades/i);
      expect(display).toBeInTheDocument();
    });
  });
});
