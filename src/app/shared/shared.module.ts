import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ColorizeDirective} from './directives/colorize.directive';
import {SelectDirective} from './directives/select.directive';
import {OrderByPipe} from './pipes/order-by.pipe';

@NgModule({
  declarations: [
    ColorizeDirective,
    SelectDirective,
    OrderByPipe,
  ],
  exports: [
    ColorizeDirective,
    SelectDirective,
    OrderByPipe,
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule {
}
