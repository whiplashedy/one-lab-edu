import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ArrayPageModule } from "./array-page/array-page.module";
import { ArrayPageComponentComponent } from "./array-page/array-page-component/array-page-component.component";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ArrayPageModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
