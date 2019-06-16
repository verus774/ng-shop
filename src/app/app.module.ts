import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {registerLocaleData} from '@angular/common';
import localeRu from '@angular/common/locales/ru';

import {AppComponent} from './app.component';
import {ProductsModule} from './products/products.module';
import {CartModule} from './cart/cart.module';
import {CoreModule} from './core/core.module';
import {LayoutModule} from './layout/layout.module';
import {AppRoutingModule} from './app-routing.module';
import {OrdersModule} from './orders/orders.module';
import {AdminModule} from './admin/admin.module';

registerLocaleData(localeRu);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CoreModule,
    LayoutModule,
    ProductsModule,
    CartModule,
    OrdersModule,
    AdminModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
