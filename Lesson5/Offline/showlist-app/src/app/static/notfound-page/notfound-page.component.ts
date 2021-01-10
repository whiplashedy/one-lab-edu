import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-notfound-page',
  templateUrl: './notfound-page.component.html',
  styleUrls: ['./notfound-page.component.css']
})
export class NotFoundPageComponent implements OnInit {
  constructor(
    private location: Location,
  ) {
  }

  ngOnInit() {

  }
  onBackClick() {
    this.location.back();
  }
}
