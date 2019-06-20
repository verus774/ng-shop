import {Component, OnInit} from '@angular/core';

import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';

import {AppState} from '../../../core/+store';
import {ProductsState} from '../../../core/+store/products';
import * as ProductsActions from './../../../core/+store/products/products.actions';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.css']
})
export class ManageProductsComponent implements OnInit {
  productsState$: Observable<ProductsState>;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.productsState$ = this.store.pipe(select('products'));
    this.store.dispatch(new ProductsActions.GetProducts());
  }

}
