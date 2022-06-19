import { createAction } from '@reduxjs/toolkit';
import { ProductModel } from '../../model/iproducts';
import { actionTypesUser } from './action-types';

export const getProductsUser = createAction<Array<ProductModel>>(
  actionTypesUser['product@get'].toLocaleString()
);
export const addProductsUser = createAction<ProductModel>(
  actionTypesUser['product@add'].toLocaleString()
);
export const deleteProductsUser = createAction<ProductModel>(
  actionTypesUser['product@delete'].toLocaleString()
);
export const updateProductsUser = createAction<ProductModel>(
  actionTypesUser['product@update'].toLocaleString()
);
