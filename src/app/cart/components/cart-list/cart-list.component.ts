import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {Subscription} from 'rxjs';

import {CartItemModel} from '../../models/cart-item.model';
import {CartService} from '../../services/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit, OnDestroy {
  items: CartItemModel[] = [];
  sum = 0;
  quantity = 0;

  sortingProps = ['price', 'name', 'quantity'];
  currSortingProp = this.sortingProps[0];
  currSortingDesc = true;

  private cartItemsSub: Subscription;
  private sumSub: Subscription;
  private quantitySub: Subscription;

  constructor(public cartService: CartService, private router: Router) {
  }

  ngOnInit() {
    this.cartItemsSub = this.cartService.getItems().subscribe(items => this.items = items);
    this.sumSub = this.cartService.getSum().subscribe(sum => this.sum = sum);
    this.quantitySub = this.cartService.getQuantity().subscribe(quantity => this.quantity = quantity);
  }

  ngOnDestroy() {
    this.cartItemsSub.unsubscribe();
    this.sumSub.unsubscribe();
    this.quantitySub.unsubscribe();
  }

  onRemoveCartItem(cartItem: CartItemModel) {
    this.cartService.removeItem(cartItem);
  }

  onIncreaseQuantity(cartItem: CartItemModel): void {
    this.cartService.changeQuantity(cartItem);
  }

  onDecreaseQuantity(cartItem: CartItemModel): void {
    this.cartService.changeQuantity(cartItem, false);
  }

  makeOrder() {
    this.router.navigate(['/order'], {state: {data: {
          items: this.items,
          sum: this.sum,
          quantity: this.quantity,
        }}});
  }
}
