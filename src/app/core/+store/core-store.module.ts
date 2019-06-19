import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

import {environment} from '../../../environments/environment';


@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot({}),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
})
export class CoreStoreModule {
}
