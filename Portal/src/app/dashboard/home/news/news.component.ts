import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { SuggestDialogComponent } from './suggest-dialog/suggest-dialog.component';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  openDialog() {
    this.dialog.open(SuggestDialogComponent);
  }

  ngOnInit() {
  }

}
