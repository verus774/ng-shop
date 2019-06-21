import {createFeatureSelector, createSelector} from '@ngrx/store';

import {productAdapter, ProductsState} from './products.state';
import {getRouterState} from '../router';
import {ProductModel} from '../../../products/models/product.model';


export const getProductsState = createFeatureSelector<ProductsState>('products');

export const getProductsError = createSelector(getProductsState, (state: ProductsState) => state.error);
export const getProductsLoaded = createSelector(getProductsState, (state: ProductsState) => state.loaded);

export const {
  selectAll: getProductsData,
  selectEntities: getProductsEntities,
  selectTotal: getProductsCount,
} = productAdapter.getSelectors(getProductsState);

export const getSelectedProductByUrl = createSelector(
  getProductsEntities,
  getRouterState,
  (products, router): ProductModel => {
    const productID = router.state.params.productID;
    if (productID) {
      return products[productID];
    } else {
      return null;
    }
  });
