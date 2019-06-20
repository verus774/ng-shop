import {initialOrdersState, OrdersState} from './orders.state';
import {OrdersActions, OrdersActionTypes} from './orders.actions';
import {OrderModel} from '../../../orders/models/order.model';

export function ordersReducer(state = initialOrdersState, action: OrdersActions): OrdersState {
  switch (action.type) {
    case OrdersActionTypes.GET_ORDERS: {
      return {
        ...state,
        loading: true,
      };
    }

    case OrdersActionTypes.GET_ORDERS_SUCCESS: {
      const data = [...action.payload as OrderModel[]];
      return {
        ...state,
        data,
        loading: false,
        loaded: true,
      };
    }

    case OrdersActionTypes.GET_ORDERS_ERROR: {
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
