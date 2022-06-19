import * as action from './action-creator';
import { ProductModel } from '../../model/productModel';
import { userReducer } from './userReducer';

describe('Given UserReducer', () => {
  const mockedArray: Array<ProductModel> = [
    {
      id: 1,
      name: 'Product',
      img: ' url',
      price: 10,
      rating: 3,
      content: '',
      productType: '',
      description: '',
    },
    {
      id: 2,
      name: 'Product',
      img: ' url',
      price: 10,
      rating: 2,
      content: '',
      productType: '',
      description: '',
    },
  ];

  describe('When calling it with load action with an array products', () => {
    test('Then it should return a new state with the action payload', () => {
      //Arrange
      const initialState: ProductModel[] = [];
      const actionForTest = action.getProductsUser(mockedArray);
      //Act

      const newState = userReducer(initialState, actionForTest);
      //Assert
      expect(newState).toEqual(mockedArray);
      expect(newState).toHaveLength(2);
    });
  });
  describe('When calling it with add action with an array products', () => {
    test('It should return a new state with the characeter added', () => {
      const initialState: ProductModel[] = [mockedArray[0]];
      const AddProductModel = { ...mockedArray[0], name: 'pepe', id: 5 };
      const actionForTest = action.addProductsUser(AddProductModel);
      // Act

      const newState = userReducer(initialState, actionForTest);
      //Asse
      expect(newState).toHaveLength(2);
    });
  });
  describe('When calling it with update action an array products', () => {
    test('It should return a new state with the ProductModel updated', () => {
      //Arrange
      const initialState: ProductModel[] = [mockedArray[0]];
      const updateProductModel = { ...mockedArray[0], name: 'pepe' };
      const actionForTest = action.updateProductsUser(updateProductModel);
      // Act

      const newState = userReducer(initialState, actionForTest);
      //Asse
      expect(newState).toHaveLength(1);
      expect(newState).toEqual([updateProductModel]);
    });
  });
  describe('When calling it with update action an same array products', () => {
    test('It should return a new state with the ProductModel updated', () => {
      //Arrange
      const initialState: ProductModel[] = [mockedArray[0]];
      const updateProductModel = { ...mockedArray[0] };
      const actionForTest = action.updateProductsUser(updateProductModel);
      // Act

      const newState = userReducer(initialState, actionForTest);
      //Asse
      expect(newState).toHaveLength(1);
      expect(newState).toEqual(initialState);
    });
  });
  describe('When calling it with delete action', () => {
    test('It should load the mocked array of productss without the deleted one', () => {
      const initialState: ProductModel[] = [mockedArray[0]];
      const deleteProductModel = { ...mockedArray[0], id: 1 };
      const actionForTest = action.deleteProductsUser(deleteProductModel);
      // Act

      const newState = userReducer(initialState, actionForTest);
      //Asse
      expect(newState).toHaveLength(0);
    });
  });
});
