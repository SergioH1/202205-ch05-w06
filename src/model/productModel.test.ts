import { ProductModel } from './productModel';

describe('Given the class ProductModel', () => {
  describe('When I instantiate an new object', () => {
    const product = { ...new ProductModel('Tortilla', '', 1, 5, '', '', '') };
    test('Then an object should be created with instance properties', () => {
      expect(product).toHaveProperty('name');
      expect(product).toHaveProperty('productType');
      expect(product).toHaveProperty('price');
      expect(product).toHaveProperty('rating');
      expect(product).toHaveProperty('img');
      expect(product).toHaveProperty('content');
      expect(product).toHaveProperty('description');
    });
  });
});
