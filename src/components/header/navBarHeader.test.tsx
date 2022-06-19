import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { NavbarHeader } from './navBarHeader';

describe('Given the component navBarHeader', () => {
  describe('when it is calling', () => {
    test('should printi', () => {
      render(
        <MemoryRouter>
          <NavbarHeader />
        </MemoryRouter>
      );
      const display = screen.getByText(/packs/i);
      expect(display).toBeInTheDocument();
    });
  });
});
