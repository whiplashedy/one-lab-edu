import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-body-layout',
  templateUrl: './body-layout.component.html',
  styleUrls: ['./body-layout.component.css']
})
export class BodyLayoutComponent implements OnInit, OnDestroy {

  constructor() {
  }

  ngOnInit(): void {
    console.log("BodyLayoutComponent is loaded");
  }

  ngOnDestroy() {
    console.log("BodyLayoutComponent is destroyed");
  }
}
