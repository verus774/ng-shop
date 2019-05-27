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
  products: CartItemModel[] = [];
  sum = 0;
  quantity = 0;

  private sub: Subscription;
  private sumSub: Subscription;
  private quantitySub: Subscription;

  constructor(private cartService: CartService) {
  }

  ngOnInit() {
    this.sub = this.cartService.channel$.subscribe(product => this.products.push(product));
    this.sumSub = this.cartService.sumChannel$.subscribe(sum => this.sum = sum);
    this.quantitySub = this.cartService.quantityChannel$.subscribe(quantity => this.quantity = quantity);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
    this.sumSub.unsubscribe();
    this.quantitySub.unsubscribe();
  }

}
