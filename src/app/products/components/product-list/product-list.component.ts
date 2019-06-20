import {Component, OnInit} from '@angular/core';

import {Observable} from 'rxjs';

import {select, Store} from '@ngrx/store';

import {ProductModel} from '../../models/product.model';
import {ProductsService} from '../../services/products.service';
import {CartService} from '../../../cart/services/cart.service';
import {CartItemModel} from '../../../cart/models/cart-item.model';
import {ProductsState} from '../../../core/+store/products';
import {AppState} from '../../../core/+store';
import * as ProductsActions from './../../../core/+store/products/products.actions';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productsState$: Observable<ProductsState>;

  constructor(
    private productsService: ProductsService,
    private cartService: CartService,
    private store: Store<AppState>,
  ) {
  }

  ngOnInit() {
    this.productsState$ = this.store.pipe(select('products'));
    this.store.dispatch(new ProductsActions.GetProducts());
  }

  onBuyProduct(evt: {product: ProductModel, quantity: number}): void {
    const {id, name, price} = evt.product;
    const {quantity} = evt;

    this.cartService.addItem(new CartItemModel(id, name, price, quantity));
  }

}
