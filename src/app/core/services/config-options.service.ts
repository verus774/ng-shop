import {Injectable} from '@angular/core';

import {CoreModule} from '../core.module';
import {ConfigModel} from '../models/config.model';

@Injectable({
  providedIn: CoreModule
})
export class ConfigOptionsService {
  private config: ConfigModel;

  getConfig(): any {
    return this.config;
  }

  setConfig(config: Partial<ConfigModel>) {
    this.config = {...this.config, ...config};
  }

}
