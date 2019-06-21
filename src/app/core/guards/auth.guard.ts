import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot} from '@angular/router';

import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';

import {CoreModule} from '../core.module';
import {AuthService} from '../services/auth.service';
import {AppState} from '../+store';
import * as RouterActions from './../+store/router/router.actions';

@Injectable({
  providedIn: CoreModule
})
export class AuthGuard implements CanActivate, CanLoad {
  constructor(
    private authService: AuthService,
    private store: Store<AppState>,
  ) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    const {url} = state;
    return this.checkLogin(url);
  }

  canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {
    const url = `/${route.path}`;
    return this.checkLogin(url);
  }

  private checkLogin(url: string): boolean {
    if (this.authService.isLoggedIn) {
      return true;
    }

    this.authService.redirectUrl = url;

    this.store.dispatch(new RouterActions.Go({
      path: ['/login'],
    }));

    return false;
  }

}
