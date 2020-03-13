import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {CoreModule} from './core';
import {SharedModule} from './shared';
import {AuthModule} from './auth/auth.module';
import {AppRoutingModule} from './app-routing.module';
import {DashboardModule} from './dashboard/dashboard.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {GalleryModule} from '@ks89/angular-modal-gallery';
@NgModule({
    declarations: [AppComponent],
    imports: [
        CoreModule,
        SharedModule,
        BrowserModule,
        DashboardModule,
        AuthModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        GalleryModule.forRoot(),

    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
