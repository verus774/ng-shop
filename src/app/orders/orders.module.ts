import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';

import {OrderListComponent} from './components/order-list/order-list.component';
import {OrdersRoutingModule} from './orders-routing.module';
import {OrdersEffects, ordersReducer} from '../core/+store/orders';
import {ProcessOrderComponent} from './components/process-order/process-order.component';

@NgModule({
  declarations: [OrderListComponent, ProcessOrderComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    OrdersRoutingModule,
    StoreModule.forFeature('orders', ordersReducer),
    EffectsModule.forFeature([OrdersEffects]),
  ],
  exports: [
    ProcessOrderComponent,
  ]
})
export class OrdersModule {
}
