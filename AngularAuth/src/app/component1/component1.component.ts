import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.scss']
})
export class Component1Component implements OnInit {

    loginval: string;
    password: string;
    
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  
  login() {
    if (this.login && this.password) {
        if (this.password === '123') {
            this.router.navigate(['/profile', this.loginval]);
        }
    }
  }

}
