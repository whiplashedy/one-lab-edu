import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { throwIfAlreadyLoaded } from '@core/guard/module-import.guard';
import { MustBeAuthGuard } from '@core/guard/must-be-auth.guard';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpErrorInterceptor } from '@core/interceptors/http.error.interceptor';
import { NotFoundPageComponent } from './static/notfound-page/notfound-page.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { SessionUserEffects } from '@core/store/session-user/session-user.effects';
import { sessionUserReducer } from '@core/store/session-user/session-user.reducer';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    NotFoundPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule,

    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyCv37DNngtlQRBlXLeXsuBN2F6DCmTk7PE',
      authDomain: 'authentification-one-lab.firebaseapp.com',
      projectId: 'authentification-one-lab',
      storageBucket: 'authentification-one-lab.appspot.com',
      messagingSenderId: '272919582902',
      appId: '1:272919582902:web:c893d6befd40a798556e17'
    }),
    AngularFireAuthModule,

    StoreModule.forRoot({
      sessionUser: sessionUserReducer
    }),
    EffectsModule.forRoot([SessionUserEffects])
  ],
  providers: [
    MustBeAuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    }
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
