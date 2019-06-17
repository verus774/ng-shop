import {Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';

import {CartService} from '../../../cart/services/cart.service';
import {CartItemModel} from '../../../cart/models/cart-item.model';
import {OrdersService} from '../../services/orders.service';
import {OrderModel} from '../../models/order.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  items: CartItemModel[] = [];
  sum = 0;
  quantity = 0;

  private cartItemsSub: Subscription;
  private sumSub: Subscription;
  private quantitySub: Subscription;

  constructor(
    private cartService: CartService,
    private ordersService: OrdersService,
    private router: Router,
    ) {
  }

  ngOnInit() {
    this.cartItemsSub = this.cartService.getItems().subscribe(items => this.items = items);
    this.sumSub = this.cartService.getSum().subscribe(sum => this.sum = sum);
    this.quantitySub = this.cartService.getQuantity().subscribe(quantity => this.quantity = quantity);
  }

  onMakeOrder() {
    this.ordersService.addOrder(new OrderModel(
      this.items,
      this.sum,
      this.quantity,
    )).subscribe(() => {
      this.cartService.clearCart();
      this.router.navigate(['products-list']);
    });
  }
}
