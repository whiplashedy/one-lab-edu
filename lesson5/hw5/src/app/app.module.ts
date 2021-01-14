import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FirebaseService } from './services/firebase.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyByVce4wKf0u__ciTldu7b-ALMz_-l2MIU",
      authDomain: "hw5-auth.firebaseapp.com",
      projectId: "hw5-auth",
      storageBucket: "hw5-auth.appspot.com",
      messagingSenderId: "261828005199",
      appId: "1:261828005199:web:e33b65a37a43004fec093a"
    })
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
