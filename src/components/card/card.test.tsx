import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { iProduct } from '../../model/iproducts';
import { RecipeReviewCard } from './card';
describe('Given the component card', () => {
  describe('when is called', () => {
    //Arrange
    const mockProduct: Array<iProduct> = [
      {
        id: 1,
        name: 'Set Novedades',
        productType: 'Pack',
        price: 29.99,
        rating: 4,
        img: 'url',
        content: 'lechuga',
        description: 'cocina',
      },
    ];

    test('should print', () => {
      //assert
      render(<RecipeReviewCard />);
      const display = screen.getByText(/In Stock/i);
      //Act
      expect(display).toBeInTheDocument();
    });
    describe('when the button is clicked', () => {});
    test('should the fuction set called is called', () => {
      render(<RecipeReviewCard />);
      const setStateMock = jest.fn();
      const useStateMock: any = (useState: any) => [useState, setStateMock];
      jest.spyOn(React, 'useState').mockImplementation(useStateMock);

      fireEvent.click(screen.getByLabelText('show more'));
      expect(setStateMock).toBeCalled();
    });
  });
});
