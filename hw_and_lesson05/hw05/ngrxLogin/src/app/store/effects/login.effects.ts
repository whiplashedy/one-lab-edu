import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import { tap } from 'rxjs/operators';

import { LoginService } from '../../services/login.service';


@Injectable()
export class LoginEffects {

  constructor(
    private actions: Actions,
    private authService: LoginService,
    private router: Router,
  ) {}

  // effects go here

}
