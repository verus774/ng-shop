import {Component, OnInit} from '@angular/core';

import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';

import {getOrdersData, getOrdersError} from '../../../core/+store/orders';
import {AppState} from '../../../core/+store';
import * as OrdersActions from './../../../core/+store/orders/orders.actions';
import {OrderModel} from '../../../orders/models/order.model';

@Component({
  selector: 'app-manage-orders',
  templateUrl: './manage-orders.component.html',
  styleUrls: ['./manage-orders.component.css']
})
export class ManageOrdersComponent implements OnInit {
  orders$: Observable<ReadonlyArray<OrderModel>>;
  ordersError$: Observable<Error | string>;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.orders$ = this.store.pipe(select(getOrdersData));
    this.ordersError$ = this.store.pipe(select(getOrdersError));

    this.store.dispatch(new OrdersActions.GetOrders());
  }

}
