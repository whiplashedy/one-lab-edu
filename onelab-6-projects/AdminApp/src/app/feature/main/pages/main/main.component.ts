import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SessionUserModel } from '@core/model/session-user.model';
import { SessionUserState } from '@core/store/session-user/session-user.state';
import {
  selectErrorMsg,
  selectIsLoading,
  selectIsLoggedIn,
  selectSessionUser
} from '@core/store/session-user/session-user.selector';
import { LogoutSessionUserAction } from '@core/store/session-user/session-user.action';

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

  get errorMsg$(): Observable<string | null | undefined> {
    return this.storeSessionUser.select(selectErrorMsg);
  }

  logout = () => {
    this.storeSessionUser.dispatch(LogoutSessionUserAction());
  }
}
