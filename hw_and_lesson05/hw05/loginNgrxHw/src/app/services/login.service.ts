import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../models/user';

@Injectable()
export class LoginService {
  private BASE_URL = 'https://social-network.samuraijs.com/api/1.0/'; //email: whiplashedy@gmail.com  pass: salam123
  logIn(email: string, password: string): Observable<any> {
    const url = `${this.BASE_URL}/auth/login`;
    return this.http.post<User>(url, {email, password});
  }

  constructor(private http: HttpClient) {
  }
}
