import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {AdminRoutingModule} from './admin-routing.module';
import {ManageOrdersComponent, ManageProductsComponent} from './components';
import {AdminComponent} from './admin.component';
import {ProductFormComponent} from './components/product-form/product-form.component';
import {ProductResolveGuard} from './guards/product-resolve.guard';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule
  ],
  declarations: [
    ManageProductsComponent,
    ManageOrdersComponent,
    ProductFormComponent,
    AdminComponent,
    // задублированный компонент?
    // ManageOrdersComponent,
  ],
  providers: [
    ProductResolveGuard,
  ]
})
export class AdminModule {
}
