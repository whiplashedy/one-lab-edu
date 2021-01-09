import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Actions, Effect} from '@ngrx/effects';
import {Observable} from 'rxjs';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import {LoginActionTypes, LogIn, All} from '../actions/login.actions';
import {LoginService} from '../../services/login.service';


@Injectable()
export class LoginEffects {

  constructor(
    private actions: Actions,
    private authService: LoginService,
    private router: Router,
  ) {
  }

  @Effect()
  LogIn: Observable<any> = this.actions
    .typeOf(LoginActionTypes.LOGIN)
    .map((action: LogIn) => action.payload)
    .switchMap(payload => {
      return this.authService.logIn(payload.email, payload.password)
        .map((user) => {
          console.log(user);
          return new LoginActionTypes({email: payload.email});
        });
    });

}
