import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AppState, selectAuthState } from '../store/app.state'
import {Router} from '@angular/router';

@Component({
  selector: 'app-some-content',
  templateUrl: './some-content.component.html',
  styleUrls: ['./some-content.component.scss']
})


export class SomeContentComponent implements OnInit {

  getState: Observable<any>;
  isAuthenticated: false;
  user = null;

  constructor(
    private store: Store<AppState>, private router: Router
  ) {
    this.getState = this.store.select(selectAuthState);
  }

  ngOnInit(): void{
    this.getState.subscribe((state) => {
      this.isAuthenticated = state.isAuthenticated;
      this.user = state.user;
    });
  }
  notLogin(): void{
    this.router.navigate(['/login']);
  }
}

