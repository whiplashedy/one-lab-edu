import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {
  title:string;
  searchText:string = '';
  model = 'BMW';

  constructor( private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data.subscribe( data =>this.title = data.title);
    
  this.route.queryParams.subscribe( params =>{console.log(params),this.searchText = params.search || ''}) ; 
  }

}
