import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-body-footer-layout',
  templateUrl: './header-body-footer-layout.component.html',
  styleUrls: ['./header-body-footer-layout.component.css']
})
export class HeaderBodyFooterLayoutComponent implements OnInit, OnDestroy {

  constructor() {
  }

  ngOnInit(): void {
    console.log("HeaderBodyFooterLayoutComponent is loaded");
  }

  ngOnDestroy() {
    console.log("HeaderBodyFooterLayoutComponent is destroyed");
  }
}
