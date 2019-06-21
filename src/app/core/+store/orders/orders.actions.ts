import {Action} from '@ngrx/store';

import {OrderModel} from '../../../orders/models/order.model';

export enum OrdersActionTypes {
  GET_ORDERS = '[Orders] GET_ORDERS',
  GET_ORDERS_SUCCESS = '[Orders] GET_ORDERS_SUCCESS',
  GET_ORDERS_ERROR = '[Orders] GET_ORDERS_ERROR',
  CREATE_ORDER = '[Orders] CREATE_ORDER',
  CREATE_ORDER_SUCCESS = '[Orders] CREATE_ORDER_SUCCESS',
  CREATE_ORDER_ERROR = '[Orders] CREATE_ORDER_ERROR',
  UPDATE_ORDER = '[Orders] UPDATE_ORDER',
  UPDATE_ORDER_SUCCESS = '[Orders] UPDATE_ORDER_SUCCESS',
  UPDATE_ORDER_ERROR = '[Orders] UPDATE_ORDER_ERROR',
  DELETE_ORDER = '[Orders] DELETE_ORDER',
  DELETE_ORDER_SUCCESS = '[Orders] DELETE_ORDER_SUCCESS',
  DELETE_ORDER_ERROR = '[Orders] DELETE_ORDER_ERROR',
}

export class GetOrders implements Action {
  readonly type = OrdersActionTypes.GET_ORDERS;
}

export class GetOrdersSuccess implements Action {
  readonly type = OrdersActionTypes.GET_ORDERS_SUCCESS;

  constructor(public payload: OrderModel[]) {
  }
}

export class GetOrdersError implements Action {
  readonly type = OrdersActionTypes.GET_ORDERS_ERROR;

  constructor(public payload: Error | string) {
  }
}

export type OrdersActions
  = GetOrders
  | GetOrdersSuccess
  | GetOrdersError;
