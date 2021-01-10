import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { User } from '../core/model/user';
import { LogOut } from '../store/actions/auth.action';
import { AppState, selectAuthState } from '../store/reducers/auth.reducers';
import { products } from '../products';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  products = products;

  getState;
  constructor(private store: Store<AppState>,private router:Router) {
    this.getState = this.store.select(selectAuthState);
  }

  ngOnInit() {

  }
 
  signOut() {
    this.store.dispatch(new LogOut());
  }


}
