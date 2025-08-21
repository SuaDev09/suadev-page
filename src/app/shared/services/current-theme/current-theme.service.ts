import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CurrentThemeService {
  private _currentTheme: BehaviorSubject<string> = new BehaviorSubject<string>(
    'light-theme',
  );

  currentTheme$ = this._currentTheme.asObservable();

  setCurrentTheme(theme: string) {
    this._currentTheme.next(theme);
  }
}
