import {
  CanActivate,
  CanLoad,
  Router
} from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class MustBeAuthGuard implements CanLoad, CanActivate {

  constructor(private router: Router, private auth: AngularFireAuth) {
    console.log("MustBeAuthGuard is loaded");
  }
  canActivate(): Observable<boolean> {
    return this.auth.authState.pipe(map(user => user !== null));
  }
  canLoad(): Observable<boolean> {
    return this.auth.authState.pipe(map(user => user !== null));
  }
}
