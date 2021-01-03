import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {
  title: string;
  searchString: string;
  inputLink: string;
  constructor(private router: Router,
              private route: ActivatedRoute,
              private fb: FormBuilder) { }


  goLink(): void {
    this.router.navigate(['/' + this.title], { queryParams: { search: this.inputLink } });
    this.inputLink = '';
  }
  ngOnInit(): void {

    this.route.data.subscribe(data =>
    this.title = data.title);
    this.route.queryParams.subscribe(params => {
      this.searchString = params.search;
    });
  }

}
