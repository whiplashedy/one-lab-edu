import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '@core/services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  email: string;
  password: string;
  isLoading = false;
  constructor(public authenticationService: AuthenticationService, public router: Router) {
    this.email = '';
    this.password = '';
    this.isLoading = false;
    console.log("RegisterComponent is loaded");
  }
  ngOnInit(): void {
    this.isLoading = false;
  }
  ngOnDestroy(): void {
    this.email = '';
    this.password = '';
    this.isLoading = false;
  }
  register(): void {
    if (this.isLoading) {
      return;
    }
    this.isLoading = true;
    this.authenticationService.register(this.email, this.password)
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
