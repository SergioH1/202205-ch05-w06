import { ProductModel } from '../model/productModel';
import { HttpStoreProduct } from './http-store-products';

describe('Given HttpStoreProduct', () => {
  describe('When we instantiate', () => {
    describe('And we use method getproducts', () => {
      test('Then it should return a array of two products', async () => {
        // arrange
        global.fetch = jest.fn().mockResolvedValue({
          json: jest
            .fn()
            .mockResolvedValue([
              new ProductModel('Tortilla', '', 1, 5, '', '', ''),
              new ProductModel('Test', '', 2, 8, '', '', ''),
            ]),
        });
        // act
        const result = await new HttpStoreProduct().getproducts();
        //
        // assert
        expect(fetch).toBeCalled();
        expect(result.length).toBe(2);
      });
    });
    describe('And we use method updateproduct', () => {
      test('Then it should return the updated product', async () => {
        // arrange
        const product = new ProductModel('Tortilla', '', 1, 5, '', '', '');
        global.fetch = jest.fn().mockResolvedValue({
          json: jest
            .fn()
            .mockResolvedValue(
              new ProductModel('Tortilla', '', 1, 5, '', '', '')
            ),
        });
        // act
        const result = await new HttpStoreProduct().updateproduct(product);
        // assert
        expect(fetch).toBeCalled();
        expect(result.rating).toBe(5);
      });
    });
    describe('And we use method deleteproduct', () => {
      test('Then it should return a status ok', async () => {
        // arrange
        const deleteId = '1';
        global.fetch = jest.fn().mockResolvedValue({
          status: 200,
        });
        // act
        const result = await new HttpStoreProduct().deleteproduct(deleteId);
        expect(fetch).toBeCalled();
        expect(result).toBe(200);
      });
    });
    describe('And we use method Addproduct', () => {
      test('Then it should return the add favorite product', async () => {
        // arrange
        const product = new ProductModel('Tortilla', '', 1, 5, '', '', '');
        global.fetch = jest.fn().mockResolvedValue({
          json: jest
            .fn()
            .mockResolvedValue(
              new ProductModel('Tortilla', '', 1, 5, '', '', '')
            ),
        });
        // act
        const result = await new HttpStoreProduct().addproduct(product);
        // assert
        expect(fetch).toBeCalled();
        expect(result.name).toBe('Tortilla');
      });
    });
  });
});
