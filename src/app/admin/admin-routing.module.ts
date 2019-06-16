import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AdminComponent} from './admin.component';
import {ManageProductsComponent} from './components';
import {ProductFormComponent} from './components/product-form/product-form.component';
import {ProductResolveGuard} from './guards/product-resolve.guard';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: '',
        children: [
          {
            path: 'products',
            component: ManageProductsComponent
          },
          {
            path: 'product/add',
            component: ProductFormComponent
          },
          {
            path: 'product/edit/:productID',
            component: ProductFormComponent,
            resolve: {
              product: ProductResolveGuard,
            }
          },
        ]
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
