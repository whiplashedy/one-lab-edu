import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit, OnDestroy {

  constructor() {
  }

  ngOnInit(): void {
    console.log("FooterComponent is loaded");
  }

  ngOnDestroy() {
    console.log("FooterComponent is destroyed");
  }

}
