import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Observable, of} from 'rxjs';
import {catchError, finalize, map} from 'rxjs/operators';

import {CoreModule} from '../core.module';
import {LocalStorageService} from './local-storage.service';

@Injectable({
  providedIn: CoreModule
})
export class AppSettingsService {
  private defaultSettings = {
    loginDelay: 1000,
  };

  private settingsFileUrl = '/assets/app-settings.json';

  constructor(private localStorageService: LocalStorageService, private http: HttpClient) {
  }

  getSettings(): Observable<any> {
    const settingsFromLocalStorage = this.localStorageService.getItem('settings');
    let settings: any;

    if (settingsFromLocalStorage) {
      return of(JSON.parse(settingsFromLocalStorage));
    }

    return this.http.get(this.settingsFileUrl).pipe(
      map(data => settings = data),
      catchError(() => {
        settings = this.defaultSettings;
        return of(settings);
      }),
      finalize(() => this.localStorageService.setItem('settings', JSON.stringify(settings)))
    );
  }

}
