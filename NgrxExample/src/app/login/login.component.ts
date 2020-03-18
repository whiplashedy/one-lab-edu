import { Component, OnInit } from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Login} from '../store/login.actions';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login: string;
  password: string;
  loading$: Observable<{loading: boolean}>;

  constructor(private store: Store<{ loading: false }>) { }

  ngOnInit(): void {
    this.loading$ = this.store.pipe(select(state => state));
  }

  submit(e) {
    e.preventDefault();
    this.store.dispatch( Login({login: this.login, password: this.password}));
  }
}
