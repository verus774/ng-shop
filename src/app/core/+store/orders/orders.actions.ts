import {Action} from '@ngrx/store';

import {OrderModel} from '../../../orders/models/order.model';

export enum OrdersActionTypes {
  GET_ORDERS = '[Orders] GET_ORDERS',
  GET_ORDERS_SUCCESS = '[Orders] GET_ORDERS_SUCCESS',
  GET_ORDERS_ERROR = '[Orders] GET_ORDERS_ERROR',
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
