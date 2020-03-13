import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../../core/services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  errorMessage = '';
  successMessage = '';

  profileForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.email
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(5)
    ])
  });

  constructor(private router: Router) {}

  ngOnInit() {}

  get email() { return this.profileForm.get('email'); }
  get password() { return this.profileForm.get('password'); }


  register(value) {}

  openPage() {
    this.router.navigateByUrl('/auth/login');
  }

}
