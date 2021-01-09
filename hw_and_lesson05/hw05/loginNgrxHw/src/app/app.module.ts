import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule} from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SomeContentComponent} from './some-content/some-content.component';
import { HttpClientModule } from '@angular/common/http';
import {LoginService} from './services/login.service';
import { EffectsModule } from '@ngrx/effects';
import {LoginEffects} from './store/effects/login.effects';
import {reducers} from './store/app.state';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SomeContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, {}),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    EffectsModule.forRoot([LoginEffects])
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
