import {Component, OnInit} from '@angular/core';

import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';

import {OrdersState} from '../../../core/+store/orders';
import {AppState} from '../../../core/+store';
import * as OrdersActions from './../../../core/+store/orders/orders.actions';

@Component({
  selector: 'app-manage-orders',
  templateUrl: './manage-orders.component.html',
  styleUrls: ['./manage-orders.component.css']
})
export class ManageOrdersComponent implements OnInit {
  ordersState$: Observable<OrdersState>;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.ordersState$ = this.store.pipe(select('orders'));
    this.store.dispatch(new OrdersActions.GetOrders());
  }

}
