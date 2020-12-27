import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LastHwComponent } from './last-hw/last-hw.component';
import { GetCoordinatesComponent } from './get-coordinates/get-coordinates.component';

@NgModule({
  declarations: [
    AppComponent,
    LastHwComponent,
    GetCoordinatesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
