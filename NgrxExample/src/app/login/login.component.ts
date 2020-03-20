import { Component, OnInit } from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Login} from '../store/login.actions';
import {Observable} from 'rxjs';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login: string;
  password: string;
  loading$: Observable<{loading: boolean}>;
  form: FormGroup;

  constructor(private store: Store<{ loading: false }>, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.loading$ = this.store.pipe(select(state => state));
    this.form = this.fb.group({
      login: [null, Validators.required],
      password: [null, Validators.required],
    });
  }

  submit(e) {
    e.preventDefault();
    console.log(this.form);
    this.store.dispatch( Login({login: this.login, password: this.password}));
  }
}
