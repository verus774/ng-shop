import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {StoreModule} from '@ngrx/store';

import {ProductComponent, ProductDetailsComponent, ProductListComponent, ProductReviewsComponent} from './components';
import {SharedModule} from '../shared/shared.module';
import {ProductsRoutingModule} from './products-routing.module';

@NgModule({
  declarations: [
    ProductComponent,
    ProductListComponent,
    ProductReviewsComponent,
    ProductDetailsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ProductsRoutingModule,
    SharedModule,
    StoreModule.forFeature('products', {}),
  ],
  exports: [
    ProductListComponent,
  ]
})
export class ProductsModule {
}
