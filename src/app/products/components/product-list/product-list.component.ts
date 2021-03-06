import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';

import {Observable} from 'rxjs';

import {ProductModel} from '../../models/product.model';
import {ProductsService} from '../../services/products.service';
import {CartService} from '../../../cart/services/cart.service';
import {CartItemModel} from '../../../cart/models/cart-item.model';
import {IProductQuantity} from '../../models/iproduct-quantity.model';
import {AppState} from '../../../core/+store';
import * as RouterActions from './../../../core/+store/router/router.actions';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products$: Observable<ProductModel[]>;

  constructor(
    private productsService: ProductsService,
    private cartService: CartService,
    private store: Store<AppState>,
  ) {
  }

  ngOnInit() {
    this.products$ = this.productsService.getProducts();
  }

  onBuyProduct(evt: IProductQuantity): void {
    const {id, name, price} = evt.product;
    const {quantity} = evt;

    this.cartService.addItem(new CartItemModel(id, name, price, quantity));
  }

  onGoDetails(product: ProductModel): void {
    this.store.dispatch(new RouterActions.Go({
      path: [`/product/${product.id}`]
    }));
  }
}
