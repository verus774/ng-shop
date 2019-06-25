import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { CartService } from '../../../cart/services/cart.service';
import { CartItemModel } from '../../../cart/models/cart-item.model';
import { OrdersService } from '../../services/orders.service';
import { OrderModel } from '../../models/order.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  items: CartItemModel[] = [];
  sum = 0;
  quantity = 0;

  // Можно немного оптимизировать количество свойств, если
  // 1. использовать массив или
  // 2. использовать объект
  // 3. использовать api Subscription, а именно метод this.sub.add(anotherSub)
  private cartItemsSub: Subscription;
  private sumSub: Subscription;
  private quantitySub: Subscription;

  constructor(
    private cartService: CartService,
    private ordersService: OrdersService,
    private router: Router
  ) {}

  ngOnInit() {
    // желательно отписку сделать, например если использовать api subscription,
    // то this.sub.unsubscribe отпишеться от всех подписок
    this.cartItemsSub = this.cartService
      .getItems()
      .subscribe(items => (this.items = items));
    this.sumSub = this.cartService.getSum().subscribe(sum => (this.sum = sum));
    this.quantitySub = this.cartService
      .getQuantity()
      .subscribe(quantity => (this.quantity = quantity));
  }

  onMakeOrder() {
    this.ordersService
      .addOrder(
        new OrderModel(
          undefined,
          this.items,
          this.sum,
          this.quantity
          // тут, возможно стоит воспользоваться .pipe(first()).subscribe(...)
          // чтобы закрыть поток, иначе надо как-то управлять подпиской
        )
      )
      .subscribe(() => {
        this.cartService.clearCart();
        this.router.navigate(['products-list']);
      });
  }
}
