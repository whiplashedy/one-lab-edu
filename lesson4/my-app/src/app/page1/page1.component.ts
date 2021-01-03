import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {
  title:string;
  searchText: string = '';
  constructor(private route: ActivatedRoute) { }
  
  ngOnInit(): void {
    this.route.data.subscribe(data => this.title = data.title);
    this.route.queryParams.subscribe( params =>{console.log(params),this.searchText = params.search || ''});
  }

}
