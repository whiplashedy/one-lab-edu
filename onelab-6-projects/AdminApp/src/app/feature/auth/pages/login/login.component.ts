import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '@core/services/authentication.service';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { selectErrorMsg, selectIsLoading, SessionUserState } from '@core/store/session-user/session-user.reducer';
import { LoginSessionUserAction } from '@core/store/session-user/session-user.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  private readonly passwordMinlength = 6;
  private readonly passwordMaxlength = 50;

  loginForm?: FormGroup;
  constructor(public authenticationService: AuthenticationService,
              public router: Router,
              private formBuilder: FormBuilder,
              private storeSessionUser: Store<SessionUserState>) {
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
  }
  ngOnDestroy(): void {
    this.loginForm?.reset();
  }

  get email(): AbstractControl | null | undefined {
    return this.loginForm?.get('email');
  }

  get password(): AbstractControl | null | undefined {
    return this.loginForm?.get('password');
  }

  get isLoading$(): Observable<boolean> {
    return this.storeSessionUser.select(selectIsLoading);
  }

  get errorMsg$(): Observable<string | null | undefined> {
    return this.storeSessionUser.select(selectErrorMsg);
  }

  login(): void {
    if (this.loginForm?.invalid) {
      return;
    }

    this.storeSessionUser
      .dispatch(LoginSessionUserAction({ email: this.email?.value, password: this.password?.value }));
  }
}
