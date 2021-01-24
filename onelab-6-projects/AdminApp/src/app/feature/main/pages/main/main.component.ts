import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  selectFeature, selectIsLoading,
  selectIsLoggedIn,
  selectSessionUser,
  SessionUserState
} from '@core/store/session-user/session-user.reducer';
import { LogoutSessionUserAction } from '@core/store/session-user/session-user.actions';
import { Observable, Subscription } from 'rxjs';
import { SessionUserModel } from '@core/model/session-user.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {

  constructor(private storeSessionUser: Store<SessionUserState>) { }

  ngOnInit(): void {}

  ngOnDestroy(): void {}

  get sessionUser$(): Observable<SessionUserModel> {
    return this.storeSessionUser.select(selectSessionUser);
  }

  get isLoggedIn$(): Observable<boolean> {
    return this.storeSessionUser.select(selectIsLoggedIn);
  }

  get isLoading$(): Observable<boolean> {
    return this.storeSessionUser.select(selectIsLoading);
  }

  logout = () => {
    this.storeSessionUser.dispatch(LogoutSessionUserAction());
  }
}
