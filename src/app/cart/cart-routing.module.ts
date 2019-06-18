import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {CartListComponent} from './components';

const routes: Routes = [
  {
    path: 'cart',
    component: CartListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule {
}
