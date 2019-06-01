import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigOptionsService {
  private config: any = {};

  getConfig(): any {
    return this.config;
  }

  setConfig(config: any): void {
    this.config = config;
  }

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
