import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';

import {ProductModel} from '../../../products/models/product.model';

export interface ProductsState extends EntityState<ProductModel> {
  readonly loading: boolean;
  readonly loaded: boolean;
  readonly error: Error | string;
}

export const productAdapter: EntityAdapter<ProductModel> = createEntityAdapter<ProductModel>();

export const initialProductsState: ProductsState = productAdapter.getInitialState( {
  loading: false,
  loaded: false,
  error: null,
});

