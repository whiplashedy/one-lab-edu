import { Component } from '@angular/core';
import { FirebaseService } from './services/firebase.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hw5';
  isSignedIn = false;
  constructor(public firebaseService: FirebaseService) { }
  ngOnInit() {
    if(localStorage.getItem('user') !== null)
      this.isSignedIn = true;
    else
      this.isSignedIn = false;
  }
  async onSignUp(email:string, password:string) {
    await this.firebaseService.signup(email,password);
    if(this.firebaseService.isLogged)
      this.isSignedIn = true;
  }
  async onSignIn(email:string, password:string) {
    await this.firebaseService.signin(email,password);
    if(this.firebaseService.isLogged)
      this.isSignedIn = true;
  }
  handleLogout() {
    this.isSignedIn = false;
  }
}
