import { render, screen } from '@testing-library/react';
import { CategoryPack } from './categoryPack';

describe('Given the component categoryPack', () => {
  describe('when it is calling', () => {
    test('should printi', () => {
      render(<CategoryPack />);
      const display = screen.getByText(/Set Novedades/i);
      expect(display).toBeInTheDocument();
    });
  });
});
