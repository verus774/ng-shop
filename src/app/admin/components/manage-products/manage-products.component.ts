import {Component, OnInit} from '@angular/core';

import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';

import {AppState, getProductsCount, getProductsData} from '../../../core/+store';
import * as ProductsActions from './../../../core/+store/products/products.actions';
import {ProductModel} from '../../../products/models/product.model';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.css']
})
export class ManageProductsComponent implements OnInit {
  products$: Observable<ReadonlyArray<ProductModel>>;
  productsCount$: Observable<number>;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.products$ = this.store.pipe(select(getProductsData));
    this.productsCount$ = this.store.pipe(select(getProductsCount));

    this.store.dispatch(new ProductsActions.GetProducts());
  }

}
