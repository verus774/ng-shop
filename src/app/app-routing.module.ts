import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {PathNotFoundComponent} from './layout';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'products-list',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: PathNotFoundComponent,
    data: {title: 'Page Not Found'}
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
