import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';

import { SessionUserModel } from '@core/model/session-user.model';
import { SessionUserState } from '@core/store/session-user/session-user.state';
import {
  selectErrorMsg,
  selectIsLoading,
  selectIsLoggedIn,
  selectSessionUser
} from '@core/store/session-user/session-user.selector';
import { LogoutSessionUserAction } from '@core/store/session-user/session-user.action';
import { UserModel } from '@core/model/user.model';
import { AuthenticationService } from '@core/service/authentication.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainComponent implements OnInit, OnDestroy {

  users$: Observable<UserModel[]>;
  constructor(private storeSessionUser: Store<SessionUserState>,
              private authService: AuthenticationService) {
    this.users$ = authService.allUsers$;
  }

  get sessionUser$(): Observable<SessionUserModel | null | undefined> {
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

  get displayedColumns(): string[] {
    return [
      'fullName',
      'username',
      'phoneNumber',
      'role',
      'shopName',
      'status',
      'toggleStatus',
      'actions',
    ];
  }

  users: UserModel[] = [
      {
        uid: '1',
        fullName: 'Arystan Kalimov',
        username: 'Rake?',
        phoneNumber: '+7 777 777 77 77',
        role: 'admin',
        shopName: 'One Technologies',
        status: true
      },
      {
        uid: '2',
        fullName: 'Damir Kalimov',
        username: null,
        phoneNumber: '+7 777 777 77 77',
        role: 'seller',
        shopName: 'One Technologies',
        status: false
      },
      {
        uid: '3',
        fullName: 'Arystan Alimov',
        username: 'Rake?',
        phoneNumber: '+7 777 777 77 77',
        role: 'admin',
        shopName: 'One Technologies',
        status: true
      }
    ];

  ngOnInit(): void {}

  ngOnDestroy(): void {}

  logout = () => {
    this.storeSessionUser.dispatch(LogoutSessionUserAction());
  }

  statusToggle = (element?: UserModel) => {
    console.log(element);
    alert(`statusToggle function ${element?.fullName}`);
    // console.log('Status is toggled ' + element);
  }

  onEdit = (element?: UserModel) => {
    alert(element?.fullName + ' edit');
  }

  onSave = (element?: UserModel) => {
    alert(element?.fullName + ' saved');
  }
}
