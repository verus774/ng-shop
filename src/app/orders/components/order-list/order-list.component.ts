import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {Subscription} from 'rxjs';
import {first} from 'rxjs/operators';

import {CartService} from '../../../cart/services/cart.service';
import {CartItemModel} from '../../../cart/models/cart-item.model';
import {OrdersService} from '../../services/orders.service';
import {OrderModel} from '../../models/order.model';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit, OnDestroy {
  items: CartItemModel[] = [];
  sum = 0;
  quantity = 0;

  private sub: Subscription;

  constructor(
    private cartService: CartService,
    private ordersService: OrdersService,
    private router: Router,
  ) {
  }

  ngOnInit() {
    this.sub = this.cartService
      .getItems()
      .subscribe(items => (this.items = items));

    const sumSub = this.cartService.getSum().subscribe(sum => (this.sum = sum));

    const quantitySub = this.cartService
      .getQuantity()
      .subscribe(quantity => (this.quantity = quantity));

    this.sub.add(sumSub);
    this.sub.add(quantitySub);
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onMakeOrder() {
    this.ordersService
      .addOrder(
        new OrderModel(
          undefined,
          this.items,
          this.sum,
          this.quantity
        )
      )
      .pipe(first())
      .subscribe(() => {
        this.cartService.clearCart();
        this.router.navigate(['products-list']);
      });
  }
}
