import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { StoreModule } from '@ngrx/store';
import { loginReducer } from './auth/login/state/login.reducer';
import { MainpageComponent } from './mainpage/mainpage.component';
import { AuthEffects } from './auth/login/state/login.effects';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({login:loginReducer}),
    EffectsModule.forRoot([AuthEffects]),
    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
