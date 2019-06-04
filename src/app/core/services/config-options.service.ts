import {Injectable} from '@angular/core';

import {CoreModule} from '../core.module';
import {ConfigModel} from '../models/config.model';

@Injectable({
  providedIn: CoreModule
})
export class ConfigOptionsService {
  private config: ConfigModel = new ConfigModel();

  getConfig(): any {
    return this.config;
  }

  // Желательно иметь возможность установить не только целый объект свойств, но и изменить какое-то свойство
  // Для этого можно использовать тип Partial<ConfigModel>
  // this.config = {...this.config, ...config};
  setConfig(config: ConfigModel): void {
    this.config = config;
  }

  // В задании это был как пример, а суть выше

  setId(id: number): void {
    this.config.id = id;
  }

  setLogin(login: string): void {
    this.config.login = login;
  }

  setEmail(email: string): void {
    this.config.email = email;
  }

}
