import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {ProductComponent, ProductListComponent, ProductReviewsComponent} from './components';
import {SharedModule} from '../shared/shared.module';
import {ProductsRoutingModule} from './products-routing.module';

@NgModule({
  declarations: [
    ProductComponent,
    ProductListComponent,
    ProductReviewsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ProductsRoutingModule,
    SharedModule,
  ],
  exports: [
    ProductListComponent,
  ]
})
export class ProductsModule {
}
