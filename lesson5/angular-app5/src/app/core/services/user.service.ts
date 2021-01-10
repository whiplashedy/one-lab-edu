import { Injectable } from '@angular/core';
import { Mock } from 'protractor/built/driverProviders';
import { Observable, throwError } from 'rxjs';
import { of } from 'rxjs';
import { User } from '../model/user';

export const MOCK_USER = new User();
MOCK_USER.email = "ualikhan@gmail.com";
MOCK_USER.password = "12345678";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public _authenticated = false;
  constructor() { }
  public authenticate(email: string, password: string): Observable<User> {
    if (email === MOCK_USER.email && password === MOCK_USER.password) {
      this._authenticated = true;
      return of(MOCK_USER);
    }
    this._authenticated = false;
    return throwError(new Error("Invalid email or password"));
  }

  public isAuthenticated(): Observable<boolean> {
    return of(this._authenticated);
  }

  public getStatus(): Observable<boolean> {
    return of(this._authenticated)
  }

}
