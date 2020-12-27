import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-userinfo',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  top = '0px';
  left = '0px';
  xd = 'xd'
  ngOnInit(): void {
  }

  move() {
    this.xd = 'absolute';
    const c = document.getElementsByClassName('moving-square');
    const x = Math.floor(Math.random() * 800);
    const y = Math.floor(Math.random() * 800);
    this.top = x + 'px';
    this.left = y + 'px';
  }
}
