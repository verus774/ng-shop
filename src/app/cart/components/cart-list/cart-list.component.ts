import {Component, OnDestroy, OnInit} from '@angular/core';

import {Subscription} from 'rxjs';

import {ProductModel} from '../../../products/models/product.model';
import {CartService} from '../../services/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit, OnDestroy {
  products: ProductModel[] = [];
  sum = 0;
  private sub: Subscription;

  constructor(private cartService: CartService) {
  }

  ngOnInit() {
    this.sub = this.cartService.channel$.subscribe(
      product => {
        this.products.push(product);
        this.sum = this.products.reduce((acc, item) => acc + item.price, 0);
      }
    );
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
