import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '@core/services/authentication.service';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from '../../custom/validators/must-match.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, OnDestroy {
  private readonly passwordMinlength = 6;
  private readonly passwordMaxlength = 50;

  registerForm?: FormGroup;
  isLoading = false;
  constructor(public authenticationService: AuthenticationService,
              public router: Router,
              private formBuilder: FormBuilder) {
    console.log('LoginComponent is created');
  }
  ngOnInit(): void {
    this.registerForm = this.formBuilder.group(
      {
        email: ['', [
          Validators.required,
          Validators.email,
          Validators.maxLength(this.passwordMaxlength)]
        ],
        password: ['', [
          Validators.required,
          Validators.minLength(this.passwordMinlength),
          Validators.maxLength(this.passwordMaxlength)]
        ],
        confirmPassword: ['', [Validators.required]]
      },
      {
        validator: MustMatch('password', 'confirmPassword')
      }
    );
    this.isLoading = false;
  }
  ngOnDestroy(): void {
    this.registerForm?.reset();
    this.isLoading = false;
    console.log('LoginComponent is destroyed');
  }

  get email(): AbstractControl | null | undefined {
    return this.registerForm?.get('email');
  }

  get password(): AbstractControl | null | undefined {
    return this.registerForm?.get('password');
  }

  get confirmPassword(): AbstractControl | null | undefined {
    return this.registerForm?.get('confirmPassword');
  }

  signup(): void {
    if (this.isLoading || this.registerForm?.invalid) {
      return;
    }
    this.isLoading = true;

    this.authenticationService.register(this.email?.value, this.password?.value)
      .then((userCredential) => {
        console.log('succesful register with value = ', userCredential);
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
