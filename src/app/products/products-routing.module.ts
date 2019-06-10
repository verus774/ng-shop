import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ProductDetailsComponent, ProductListComponent} from './components';

const routes: Routes = [
  {
    path: 'products-list',
    component: ProductListComponent,
  },
  {
    path: 'product/:productID',
    component: ProductDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule {
}
