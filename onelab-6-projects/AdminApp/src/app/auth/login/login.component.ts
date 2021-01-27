import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Login } from './state/login.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  profileForm: any;

  constructor(
    private store:Store<{login: { loading:boolean,isLoggedIn:boolean}}>, 
    private router:Router,
    private fb:FormBuilder
    ) {this.profileForm = this.fb.group({
      login: [null, Validators.required],
      password: [null, Validators.required],
    }); }
  

  ngOnInit(): void {
    this.store.pipe(select(state => state.login)).subscribe(state =>{ {console.log(state)}if(state.isLoggedIn) this.router.navigate(['mainpage'])} )
  }

  submit( )
  {
    
    
      this.store.dispatch(Login(this.profileForm.value));
    
  }

}


