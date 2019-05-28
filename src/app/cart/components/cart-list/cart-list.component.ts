import {Component, OnDestroy, OnInit} from '@angular/core';

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

  private cartItemsSub: Subscription;
  private sumSub: Subscription;
  private quantitySub: Subscription;

  constructor(private cartService: CartService) {
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

}
