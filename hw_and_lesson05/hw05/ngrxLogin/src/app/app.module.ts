import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {loginReducer} from './store/login.reducer';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {SomeContentComponent} from './some-content/some-content.component';
import {HttpClientModule} from '@angular/common/http';
import {LoginService} from "./services/login.service";
import {EffectsModule} from '@ngrx/effects';
import {LoginEffects} from './store/effects/login.effects';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SomeContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({login: loginReducer}),
    FormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    HttpClientModule,
    EffectsModule.forRoot([LoginEffects])
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
