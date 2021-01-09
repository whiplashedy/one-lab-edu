import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { User } from '../models/user';
import {LogIn} from '../store/actions/login.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: User = new User();
  form: FormGroup;

  constructor(private store: Store<{ loading: false }>, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: [this.user.email,  [Validators.required, Validators.email]],
      password: [this.user.password, [Validators.required, Validators.minLength(8)]],
    });
  }

  submit(e) {
    e.preventDefault();
    this.user.email = this.form.value.email;
    this.user.password = this.form.value.password;
    const payload = {
      email: this.user.email,
      password: this.user.password
    };
    console.log(this.user.email, this.user.password);
    this.store.dispatch(new LogIn(payload));
  }
}
