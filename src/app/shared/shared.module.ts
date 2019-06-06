import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ColorizeDirective} from './directives/colorize.directive';
import {SelectDirective} from './directives/select.directive';
import {OrderByPipe} from './pipes/order-by.pipe';

const decl = [ColorizeDirective, SelectDirective, OrderByPipe];

@NgModule({
  declarations: [...decl],
  exports: [...decl],
  imports: [CommonModule]
})
export class SharedModule {
}
