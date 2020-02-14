import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

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
    RouterModule.forRoot(
    [
        {path: '', redirectTo: 'auth', pathMatch: 'full'},
        {path: 'auth', component: Component1Component},
        {path: 'profile/:id', component: Component2Component},
    ]
    ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
