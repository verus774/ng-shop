import {Component, OnInit} from '@angular/core';

import {Observable} from 'rxjs';

import {OrderModel} from '../../../orders/models/order.model';
import {OrdersService} from '../../../orders/services/orders.service';

@Component({
  selector: 'app-manage-orders',
  templateUrl: './manage-orders.component.html',
  styleUrls: ['./manage-orders.component.css']
})
export class ManageOrdersComponent implements OnInit {
  orders$: Observable<OrderModel[]>;

  constructor(private ordersService: OrdersService) {
  }

  ngOnInit() {
    this.orders$ = this.ordersService.getOrders();
  }

}
