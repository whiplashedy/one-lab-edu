import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MoveableBlockComponent } from './moveable-block/moveable-block.component';

@NgModule({
  declarations: [
    AppComponent,
    MoveableBlockComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
