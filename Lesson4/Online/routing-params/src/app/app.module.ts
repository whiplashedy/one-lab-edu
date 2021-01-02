import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormpageComponent } from './formpage/formpage.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    FormpageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
