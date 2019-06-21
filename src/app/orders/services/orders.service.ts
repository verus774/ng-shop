import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';

import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

import {OrderModel} from '../models/order.model';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  private id = 100;
  private ordersUrl = 'http://localhost:3000/orders';

  constructor(private http: HttpClient) {
  }

  getOrders(): Observable<OrderModel[]> {
    return this.http
      .get<OrderModel[]>(this.ordersUrl)
      .pipe(catchError(this.handleError));
  }

  addOrder(order: OrderModel): Observable<any> {
    const body = JSON.stringify({id: ++this.id, ...order});
    const options = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };

    return this.http
      .post<OrderModel>(this.ordersUrl, body, options)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    console.error('An error occurred', error);
    return throwError(error);
  }

}
