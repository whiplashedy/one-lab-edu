import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '@core/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  email: string;
  password: string;
  isLoading = false;
  constructor(public authenticationService: AuthenticationService, public router: Router) {
    this.email = '';
    this.password = '';
    this.isLoading = false;
    console.log("LoginComponent is loaded");
  }
  ngOnInit(): void {
    this.isLoading = false;
  }
  ngOnDestroy(): void {
    this.email = '';
    this.password = '';
    this.isLoading = false;
  }
  login(): void {
    if (this.isLoading) {
      return;
    }
    this.isLoading = true;
    this.authenticationService.login(this.email, this.password)
      .then((value) => {
        console.log('succesful login with value = ', value);
        this.isLoading = false;
        this.router.navigate(['/home']);
      })
      .catch((err) => {
        console.log('failed login with message = ', err.message);
        this.isLoading = false;
        alert(err.message);
      });
  }
}
