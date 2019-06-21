import {createFeatureSelector, createSelector} from '@ngrx/store';

import {productAdapter, ProductsState} from './products.state';

export const getProductsState = createFeatureSelector<ProductsState>('products');

export const getProductsError = createSelector(getProductsState, (state: ProductsState) => state.error);
export const getProductsLoaded = createSelector(getProductsState, (state: ProductsState) => state.loaded);

export const {
  selectAll: getProductsData,
  selectTotal: getProductsCount,
} = productAdapter.getSelectors(getProductsState);
