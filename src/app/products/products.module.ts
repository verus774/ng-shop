import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';

import {ProductComponent, ProductDetailsComponent, ProductListComponent, ProductReviewsComponent} from './components';
import {SharedModule} from '../shared/shared.module';
import {ProductsRoutingModule} from './products-routing.module';
import {ProductsEffects, productsReducer} from '../core/+store/products';

@NgModule({
  declarations: [
    ProductComponent,
    ProductListComponent,
    ProductReviewsComponent,
    ProductDetailsComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule,
    StoreModule.forFeature('products', productsReducer),
    EffectsModule.forFeature([ProductsEffects]),
  ],
  exports: [
    ProductListComponent,
  ]
})
export class ProductsModule {
}
