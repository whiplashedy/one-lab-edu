import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-more-info',
  templateUrl: './more-info.component.html',
  styleUrls: ['./more-info.component.scss']
})
export class MoreInfoComponent implements OnInit {
  photos = [
    {
      url: 'assets/img/Rectangle 5(1).png'
    },
    {
      url: 'assets/img/Rectangle 5.1(1).png'
    },
    {
      url: 'assets/img/Rectangle 5.2(1).png'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
