import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
      this.time = new Observable<string>((observer: Observer<string>) => {
        setInterval(() => observer.next(new Date().toString()), 1000);
      });
  }
  
  myclass="red";
  mynumber=0;
  items=[
      {name: "First"},
      {name: "Second"},
      {name: "Third"}
  ];
  time: Observable<string>;
  
  changeColor(){
    this.myclass="blue";
  }

}
