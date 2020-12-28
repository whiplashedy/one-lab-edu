import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  logged=false;



  constructor() { }
 
  ngOnInit(): void {
    if (localStorage.getItem("login" && "password")) {
      this.logged = true;
    }
    else {
      this.logged = false;
    }
  }
  
  login() {
    const log = (<HTMLInputElement>document.querySelector('#usrn')).value;
    const pass = (<HTMLInputElement>document.querySelector('#pswrd')).value;
    localStorage.setItem('login', log);
    localStorage.setItem('password', pass);
  }

  logout(){
    localStorage.clear();
    this.logged = false;
  }


}
