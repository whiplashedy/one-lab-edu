import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { throwIfAlreadyLoaded } from '@core/guard/module-import.guard';
import { MustBeAuthGuard } from '@core/guard/must-be-auth.guard';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpErrorInterceptor } from '@core/interceptors/http.error.interceptor';
import { NotFoundPageComponent } from '../static/notfound-page/notfound-page.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { DataModule } from '@data/data.module';
import { LayoutModule } from '../layout/layout.module';
import { usersReducer } from '@core/store/users/users.reducer';
import { StoreModule } from '@ngrx/store';
import { UsersEffects } from '@core/store/users/users.effects';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [
    NotFoundPageComponent
  ],
  imports: [
    CommonModule,

    DataModule,
    LayoutModule,

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
      users: usersReducer
    }),
    EffectsModule.forRoot([UsersEffects])
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
    console.log("CoreModule is loaded");
  }
}
