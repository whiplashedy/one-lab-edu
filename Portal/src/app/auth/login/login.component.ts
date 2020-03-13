import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../../core/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  haveError = false;
  errorMessage = {
    title: '',
    text: ''
  };
  profileForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.minLength(5)
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(5)
    ])
  });

  constructor(
    private router: Router,
    public authService: AuthService
  ) {}

  ngOnInit() {}

  get email() { return this.profileForm.get('email'); }
  get password() { return this.profileForm.get('password'); }


  auth(value) {
      // localStorage.setItem('auth', 'BSeitkali');
      // this.router.navigate(['/dashboard/home']);

      this.authService.auth(value.email, value.password).subscribe(
          (res: any) => {
              if (res.email && res.email.toLowerCase() === value.email.toLowerCase() || res.id === value.email) {
                  localStorage.setItem('auth', res.id);
                  const redirect = this.authService.redirectUrl ?
                  this.router.parseUrl(this.authService.redirectUrl) : '/dashboard/home';
                  this.router.navigateByUrl(redirect);

              } else {
                  this.haveError = true;
                  this.errorMessage = {
                      title: 'Ошибка авторизации',
                      text: 'Неправильный логин или пароль.'
                  };
              }
          },
          () => {
              this.haveError = true;
              this.errorMessage = {
                  title: 'Ошибка авторизации',
                  text: 'Неправильный логин или пароль.'
              };
          }
      );
  }

}
