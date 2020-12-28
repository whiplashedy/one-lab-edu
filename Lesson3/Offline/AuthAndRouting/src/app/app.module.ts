import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NotFoundPageComponent} from "./static/notfound-page/notfound-page.component";
import {MainModule} from "./components/main/main.module";
import {AngularFireModule} from "@angular/fire";
import {AngularFireAuthModule} from "@angular/fire/auth";
import {AuthenticationService} from "./_services/authentication.service";
import {AuthModule} from "./components/auth/auth.module";
import { FooterComponent } from './shared/footer/footer.component';
import {HeaderComponent} from "./shared/header/header.component";

var firebaseConfig = {
  apiKey: "AIzaSyCv37DNngtlQRBlXLeXsuBN2F6DCmTk7PE",
  authDomain: "authentification-one-lab.firebaseapp.com",
  projectId: "authentification-one-lab",
  storageBucket: "authentification-one-lab.appspot.com",
  messagingSenderId: "272919582902",
  appId: "1:272919582902:web:c893d6befd40a798556e17"
};

@NgModule({
  declarations: [
    AppComponent,
    NotFoundPageComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainModule,
    AuthModule,
    CommonModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule

  ],
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
