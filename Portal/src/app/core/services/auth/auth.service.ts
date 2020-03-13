import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { tap, delay } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;

  redirectUrl: string;

    host = 'http://192.168.10.157:6060';

    constructor(private http: HttpClient) {
    }

    // auth(login: string, password: string): Observable<any> {
    //     return this.http.post(this.host + '/employee/signin', {login, password});
    // }
    auth(login: string, password: string): Observable<any> {
        return this.http.post(this.host + '/employee/signin', {login, password}).pipe(
            delay(1000),
            tap(val => this.isLoggedIn = true)
        );
    }

    logout(): void {
        this.isLoggedIn = false;
    }

}
