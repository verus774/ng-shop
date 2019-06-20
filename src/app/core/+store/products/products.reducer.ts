import {initialProductsState, ProductsState} from './products.state';
import {ProductsActions, ProductsActionTypes} from './products.actions';
import {ProductModel} from '../../../products/models/product.model';

export function productsReducer(state = initialProductsState, action: ProductsActions): ProductsState {
  switch (action.type) {
    case ProductsActionTypes.GET_PRODUCTS: {
      return {
        ...state,
        loading: true,
      };
    }

    case ProductsActionTypes.GET_PRODUCTS_SUCCESS: {
      const data = [...action.payload as ProductModel[]];
      return {
        ...state,
        data,
        loading: false,
        loaded: true,
      };
    }

    case ProductsActionTypes.GET_PRODUCTS_ERROR: {
      const error = action.payload;
      return {
        ...state,
        loading: false,
        loaded: false,
        error
      };
    }

    default: {
      return state;
    }
  }
}
