import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  logged = false;
  constructor() { }

  ngOnInit(): void {
    if (localStorage.getItem("login" && "password")) {
      this.logged = true;
    }
    else {
      this.logged = false;
    }
  }

  logout(){
    localStorage.clear();
    this.logged = false;
  }

  

}
