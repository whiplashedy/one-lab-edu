import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {DomChangeDirective} from './_directives/dom-change.directive';
import {CommunicationService} from "./_services/communication-service";

@NgModule({
  declarations: [
    AppComponent,
    DomChangeDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CommunicationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
