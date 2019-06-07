import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ProductListComponent, ProductReviewsComponent} from './components';

const routes: Routes = [
  {
    path: 'products-list',
    component: ProductListComponent,
  },
  {
    path: 'product/:productID',
    component: ProductReviewsComponent,
    outlet: 'reviews'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule {
}
