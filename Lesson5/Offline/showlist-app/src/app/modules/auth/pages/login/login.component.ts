import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '@core/services/authentication.service';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  private readonly passwordMinlength = 6;
  private readonly passwordMaxlength = 50;

  loginForm?: FormGroup;
  isLoading = false;
  constructor(public authenticationService: AuthenticationService,
              public router: Router,
              private formBuilder: FormBuilder) {
    console.log('LoginComponent is created');
  }
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group(
      {
        email: ['', [
          Validators.required,
          Validators.email,
          Validators.maxLength(this.passwordMaxlength)]
        ],
        password: ['', [
          Validators.required,
          Validators.minLength(this.passwordMinlength),
          Validators.maxLength(this.passwordMaxlength)]]
      }
    );
    this.isLoading = false;
  }
  ngOnDestroy(): void {
    this.loginForm?.reset();
    this.isLoading = false;
    console.log('LoginComponent is destroyed');
  }

  get email(): AbstractControl | null | undefined {
    return this.loginForm?.get('email');
  }

  get password(): AbstractControl | null | undefined {
    return this.loginForm?.get('password');
  }

  login(): void {
    if (this.isLoading || this.loginForm?.invalid) {
      return;
    }
    this.isLoading = true;

    this.authenticationService.login(this.email?.value, this.password?.value)
      .then((userCredential) => {
        console.log('succesful login with value = ', userCredential);
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
