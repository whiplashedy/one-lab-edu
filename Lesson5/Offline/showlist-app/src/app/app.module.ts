import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { LayoutModule } from './layout/layout.module';
import { DataModule } from './data/data.module';
import { NotFoundPageComponent } from './static/notfound-page/notfound-page.component';

const firebaseConfig = {
  apiKey: 'AIzaSyCv37DNngtlQRBlXLeXsuBN2F6DCmTk7PE',
  authDomain: 'authentification-one-lab.firebaseapp.com',
  projectId: 'authentification-one-lab',
  storageBucket: 'authentification-one-lab.appspot.com',
  messagingSenderId: '272919582902',
  appId: '1:272919582902:web:c893d6befd40a798556e17'
};

@NgModule({
  declarations: [
    AppComponent,
    NotFoundPageComponent
  ],
  imports: [
    BrowserModule,

    CoreModule,
    DataModule,
    SharedModule,
    LayoutModule,

    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,

    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
