import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-notfound-page',
  templateUrl: './notfound-page.component.html',
  styleUrls: ['./notfound-page.component.scss']
})
export class NotFoundPageComponent implements OnInit {
  constructor(
    private location: Location,
  ) {
  }

  ngOnInit(): void {

  }
  onBackClick(): void {
    this.location.back();
  }
}
