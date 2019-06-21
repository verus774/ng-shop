import {Component, OnInit} from '@angular/core';

import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';

import {AppState, getProductsCount, getProductsData, getProductsError} from '../../../core/+store';
import * as ProductsActions from './../../../core/+store/products/products.actions';
import {ProductModel} from '../../../products/models/product.model';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.css']
})
export class ManageProductsComponent implements OnInit {
  products$: Observable<ReadonlyArray<ProductModel>>;
  productsError$: Observable<Error | string>;
  productsCount$: Observable<number>;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.products$ = this.store.pipe(select(getProductsData));
    this.productsError$ = this.store.pipe(select(getProductsError));
    this.productsCount$ = this.store.pipe(select(getProductsCount));

    this.store.dispatch(new ProductsActions.GetProducts());
  }

}
