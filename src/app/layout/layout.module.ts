import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AboutComponent, LoginComponent, PathNotFoundComponent} from './components';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    AboutComponent,
    PathNotFoundComponent,
    LoginComponent,
  ],
  exports: [
    AboutComponent,
  ]
})
export class LayoutModule {
}
