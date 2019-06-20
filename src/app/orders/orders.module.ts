import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';

import {OrderListComponent} from './components/order-list/order-list.component';
import {OrdersRoutingModule} from './orders-routing.module';
import {OrdersEffects, ordersReducer} from '../core/+store/orders';

@NgModule({
  declarations: [OrderListComponent],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    StoreModule.forFeature('orders', ordersReducer),
    EffectsModule.forFeature([OrdersEffects]),
  ]
})
export class OrdersModule {
}
