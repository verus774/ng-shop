import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {CartItemComponent, CartListComponent} from './components/';
import {SharedModule} from '../shared/shared.module';
import {CartRoutingModule} from './cart-routing.module';

@NgModule({
  declarations: [
    CartListComponent,
    CartItemComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    CartRoutingModule,
  ],
  exports: [
    CartListComponent,
  ]
})
export class CartModule {
}
