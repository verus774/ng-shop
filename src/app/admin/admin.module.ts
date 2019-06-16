import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AdminRoutingModule} from './admin-routing.module';
import {ManageProductsComponent} from './components';
import {AdminComponent} from './admin.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [
    ManageProductsComponent,
    AdminComponent,
  ]
})
export class AdminModule {
}
