import {
  CanActivate,
  CanLoad,
  Router
} from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectIsLoggedIn, SessionUserState } from '@core/store/session-user/session-user.reducer';

@Injectable()
export class MustBeAuthGuard implements CanLoad, CanActivate {

  constructor(private router: Router, private storeSessionUserStore: Store<SessionUserState>) {}
  canActivate(): Observable<boolean> {
    return this.storeSessionUserStore.select(selectIsLoggedIn);
  }
  canLoad(): Observable<boolean> {
    return this.storeSessionUserStore.select(selectIsLoggedIn);
  }
}
