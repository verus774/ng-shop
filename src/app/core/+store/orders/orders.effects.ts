import {Injectable} from '@angular/core';

import {Observable, of} from 'rxjs';
import {catchError, map, switchMap} from 'rxjs/operators';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Action} from '@ngrx/store';

import {OrdersService} from '../../../orders/services/orders.service';
import * as OrdersActions from './orders.actions';

@Injectable()
export class OrdersEffects {

  constructor(
    private actions$: Actions,
    private ordersService: OrdersService,
  ) {
  }

  @Effect()
  getProducts$: Observable<Action> = this.actions$.pipe(
    ofType<OrdersActions.GetOrders>(OrdersActions.OrdersActionTypes.GET_ORDERS),
    switchMap((action: OrdersActions.GetOrders) =>
      this.ordersService
        .getOrders()
        .pipe(
          map(orders => new OrdersActions.GetOrdersSuccess(orders)),
          catchError(err => of(new OrdersActions.GetOrdersError(err)))
        )
    )
  );

}
