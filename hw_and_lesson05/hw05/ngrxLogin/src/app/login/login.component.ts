import { Component, OnInit } from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Login} from '../store/login.actions';
import {Observable} from 'rxjs';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { User } from '../models/user';

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
      email: [this.user.email, Validators.required],
      password: [this.user.password, Validators.required],
    });
  }

  submit(e) {
    e.preventDefault();
    this.user.email = this.form.value.email;
    this.user.password = this.form.value.password;
    console.log(this.user.email, this.user.password);
    this.store.dispatch( Login({login: this.user.email, password: this.user.password}));
  }
}
