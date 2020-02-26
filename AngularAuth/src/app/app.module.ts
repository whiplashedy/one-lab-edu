import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';

@NgModule({
  declarations: [
    AppComponent,
    Component1Component,
    Component2Component,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
    [
        {path: '', redirectTo: 'auth', pathMatch: 'full'},
        {path: 'auth', component: Component1Component},
        {path: 'profile/:id', component: Component2Component},
    ],
    AngularFireModule.initializeApp(environment.firebase),
  AngularFirestoreModule,
  AngularFireAuthModule,
    ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
