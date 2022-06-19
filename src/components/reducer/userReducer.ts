import { createReducer } from '@reduxjs/toolkit';
import { ProductModel } from '../../model/iproducts';
import * as ac from './action-creator';

const initialState: Array<ProductModel> = [];
export const userReducer = createReducer(initialState, (builder) => {
  return builder
    .addCase(ac.getProductsUser, (state, action) => [...action.payload])
    .addCase(ac.addProductsUser, (state, action) => [...state, action.payload])
    .addCase(ac.updateProductsUser, (state, action) =>
      state.map((item) =>
        item.id === action.payload.id ? action.payload : item
      )
    )
    .addCase(ac.deleteProductsUser, (state, action) =>
      state.filter((item) => item.id !== action.payload.id)
    );
});
