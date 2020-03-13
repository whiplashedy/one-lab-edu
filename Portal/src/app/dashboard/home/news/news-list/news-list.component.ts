import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { News } from '../news';
import { MatDialog } from '@angular/material';
import { MoreInfoComponent } from '../more-info/more-info.component';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {
  news: News;
  photos = [
    {
      url: 'assets/img/Rectangle 5.png'
    },
    {
      url: 'assets/img/Rectangle 5.1.png'
    },
    {
      url: 'assets/img/Rectangle 5.2.png'
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
  constructor(public dialog: MatDialog, private http: HttpClient) { }

  ngOnInit( ) {
    this.http.get('assets/news.json').subscribe((data: News) => this.news = data);
  }

  openDialog( ) {
    this.dialog.open(MoreInfoComponent);
  }
}
