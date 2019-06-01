import {InjectionToken} from '@angular/core';

const appInfo: any = {App: 'TaskManager', Ver: '1.0'};
export const AppConstants = new InjectionToken<string>('AppConstants');

export const ConstantsService = {
  provide: AppConstants,
  useValue: appInfo
};
