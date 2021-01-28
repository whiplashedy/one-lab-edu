import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
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
import { UserModel } from '@core/model/user.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
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

  get users(): UserModel[] {
    return [
      {
        fullName: 'Arystan Kalimov',
        username: 'Rake?',
        phoneNumber: '+7 777 777 77 77',
        role: {
          id: '1',
          roleName: 'admin',
          status: true,
        },
        shopName: 'One Technologies',
        status: true
      },
      {
        fullName: 'Damir Kalimov',
        username: null,
        phoneNumber: '+7 777 777 77 77',
        role: {
          id: '2',
          roleName: 'seller',
          status: true,
        },
        shopName: 'One Technologies',
        status: false
      },
      {
        fullName: 'Arystan Alimov',
        username: 'Rake?',
        phoneNumber: '+7 777 777 77 77',
        role: {
          id: '1',
          roleName: 'admin',
          status: true,
        },
        shopName: 'One Technologies',
        status: true
      }
    ];
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

  logout = () => {
    this.storeSessionUser.dispatch(LogoutSessionUserAction());
  }

  statusToggle = (element?: UserModel) => {
    console.log(element);
    alert(`statusToggle function ${element?.fullName}`);
    // console.log('Status is toggled ' + element);
  }

  onEdit = (element?: UserModel) => {
    alert(element + ' edit');
  }

  onSave = (element?: UserModel) => {
    alert(element + ' saved');
  }
}
