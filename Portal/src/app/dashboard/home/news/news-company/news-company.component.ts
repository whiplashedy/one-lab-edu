import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { MoreInfoComponent } from '../more-info/more-info.component';

@Component({
  selector: 'app-news-company',
  templateUrl: './news-company.component.html',
  styleUrls: ['./news-company.component.scss']
})
export class NewsCompanyComponent implements OnInit {
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
  birthdays = [
    {
      day: '4 июля',
      urlToAva: 'assets/img/Ellipse 2.1 (Stroke).png',
      name: 'Вася Пупкин'
    },
    {
      day: '5 июля',
      urlToAva: 'assets/img/Ellipse 2.1 (Stroke).png',
      name: 'Иван Иванов'
    },
    {
      day: '8 июля',
      urlToAva: 'assets/img/Ellipse 2.1 (Stroke).png',
      name: 'Иванесса Иванова'
    }
  ];
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog() {
    this.dialog.open(MoreInfoComponent);
  }

}
