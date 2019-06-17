import {Injectable} from '@angular/core';

import {BehaviorSubject, Observable, of} from 'rxjs';

import {OrderModel} from '../models/order.model';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  private orders: OrderModel[] = [];
  private ordersSource = new BehaviorSubject<OrderModel[]>(this.orders);
  private orders$ = this.ordersSource.asObservable();

  getOrders(): Observable<OrderModel[]> {
    return this.orders$;
  }

  addOrder(order: OrderModel): Observable<any> {
    this.orders.push(order);
    this.ordersSource.next(this.orders);

    return of({success: true});
  }

}
