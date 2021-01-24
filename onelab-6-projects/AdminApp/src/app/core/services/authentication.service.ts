import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFireAuth } from '@angular/fire/auth';
import { Store } from '@ngrx/store';
import { selectIsLoggedIn, SessionUserState } from '@core/store/session-user/session-user.reducer';
import {
  LoginSessionUserCompleteAction,
  LogoutSessionUserCompleteAction
} from '@core/store/session-user/session-user.actions';
import { take, tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  constructor(private router: Router,
              private firebaseAuth: AngularFireAuth,
              private sessionUserStore: Store<SessionUserState>) {
    this.firebaseAuth.user.pipe(take(1)).subscribe((user) => {
      if (user) {
        const sessionUser = {
          id: user.uid
        };
        this.sessionUserStore.dispatch(LoginSessionUserCompleteAction( { sessionUser }));
      } else {
        this.sessionUserStore.dispatch(LogoutSessionUserCompleteAction());
      }
    });
  }

  register = (email: string, password: string) => this.firebaseAuth.createUserWithEmailAndPassword(email, password);
  login = (email: string, password: string) => this.firebaseAuth.signInWithEmailAndPassword(email, password);
  logout = () => this.firebaseAuth.signOut();
}
