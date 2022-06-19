import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import { RecipeReviewCard } from './card';
describe('Given the component card', () => {
  describe('when is called', () => {
    //Arrange
    const mockProduct = {
      id: 1,
      name: 'Set Novedades',
      productType: 'Pack',
      price: 29.99,
      rating: 4,
      img: 'url',
      content: 'lechuga',
      description: 'cocina',
    };
    test('should print', () => {
      //assert
      render(<RecipeReviewCard product={mockProduct} />);
      const display = screen.getByText(/In Stock/i);
      //Act
      expect(display).toBeInTheDocument();
    });
    describe('when the button is clicked', () => {});
    test('should the fuction set called is called', () => {
      render(<RecipeReviewCard product={mockProduct} />);
      const setStateMock = jest.spyOn(React, 'useState');

      fireEvent.click(screen.getByLabelText('show more'));
      expect(setStateMock).toBeCalled();
    });
  });
});
