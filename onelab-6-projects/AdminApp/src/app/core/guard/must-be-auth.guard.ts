import {
  CanActivate,
  CanLoad, Route,
  Router, UrlSegment
} from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { debounce, filter, take } from 'rxjs/operators';
import { selectIsLoading, selectIsLoggedIn } from '@core/store/session-user/session-user.selector';
import { SessionUserState } from '@core/store/session-user/session-user.state';

@Injectable()
export class MustBeAuthGuard implements CanLoad {

  constructor(private router: Router, private storeSessionUserStore: Store<SessionUserState>) {}

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> {
    return this.storeSessionUserStore.select(selectIsLoggedIn)
      .pipe(
        take(1),
        debounce(() => {
          return this.storeSessionUserStore.select(selectIsLoading)
            .pipe(
              filter(isLoading => !isLoading)
            );
        }),
        take(1)
      );
  }
}
