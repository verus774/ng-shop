import {initialProductsState, ProductsState} from './products.state';
import {ProductsActions, ProductsActionTypes} from './products.actions';

export function productsReducer(state = initialProductsState, action: ProductsActions): ProductsState {
  switch (action.type) {
    case ProductsActionTypes.GET_PRODUCTS: {
      return {
        ...state,
        loading: true,
      };
    }

    default: {
      return state;
    }
  }
}
