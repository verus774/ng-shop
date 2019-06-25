import {Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {select, Store} from '@ngrx/store';


import {ProductModel} from '../../../products/models/product.model';
import {ProductsService} from '../../../products/services/products.service';
import {AppState, getSelectedProductByUrl} from '../../../core/+store';
import * as RouterActions from './../../../core/+store/router/router.actions';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  product: ProductModel;

  private sub: Subscription;

  constructor(
    private store: Store<AppState>,
    private productsService: ProductsService,
  ) {
  }

  ngOnInit() {
    // стоит добавить отписку
    this.sub = this.store
      .pipe(select(getSelectedProductByUrl))
      .subscribe(product => this.product = product);
  }

  onSaveProduct() {
    const product = { ...this.product };
    const method = product.id ? 'updateProduct' : 'addProduct';

    this.productsService[method](product)
      .then(() => this.onGoBack())
      .catch(err => console.log(err));
  }

  onGoBack(): void {
    this.store.dispatch(new RouterActions.Go({
      path: ['/admin/products']
    }));

  }
}
