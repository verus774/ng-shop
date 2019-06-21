import {Action} from '@ngrx/store';

import {ProductModel} from '../../../products/models/product.model';

export enum ProductsActionTypes {
  GET_PRODUCTS = '[Products] GET_PRODUCTS',
  GET_PRODUCTS_SUCCESS = '[Products] GET_PRODUCTS_SUCCESS',
  GET_PRODUCTS_ERROR = '[Products] GET_PRODUCTS_ERROR',
}

export class GetProducts implements Action {
  readonly type = ProductsActionTypes.GET_PRODUCTS;
}

export class GetProductsSuccess implements Action {
  readonly type = ProductsActionTypes.GET_PRODUCTS_SUCCESS;

  constructor(public payload: ProductModel[]) {
  }
}

export class GetProductsError implements Action {
  readonly type = ProductsActionTypes.GET_PRODUCTS_ERROR;

  constructor(public payload: Error | string) {
  }
}

export type ProductsActions
  = GetProducts
  | GetProductsSuccess
  | GetProductsError;
