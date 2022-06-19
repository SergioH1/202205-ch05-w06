import { configureStore } from '@reduxjs/toolkit';
import { useReducer } from 'react';
import { ProductModel } from '../model/productModel';

export interface iState {
  user: Array<ProductModel>;
  speaker: Array<ProductModel>;
}

export const store = configureStore({
  reducer: {
    user: useReducer,
  },
});
