import {createFeatureSelector} from '@ngrx/store';

import {productAdapter, ProductsState} from './products.state';

export const getProductsState = createFeatureSelector<ProductsState>('products');

export const {
  selectAll: getProductsData,
  selectTotal: getProductsCount,
} = productAdapter.getSelectors(getProductsState);
