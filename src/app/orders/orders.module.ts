import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {OrderListComponent} from './components/order-list/order-list.component';
import {OrdersRoutingModule} from './orders-routing.module';

@NgModule({
  declarations: [OrderListComponent],
  imports: [
    CommonModule,
    OrdersRoutingModule,
  ]
})
export class OrdersModule {
}
