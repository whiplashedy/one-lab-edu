import {Component, ElementRef, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-formpage',
  templateUrl: './formpage.component.html',
  styleUrls: ['./formpage.component.css']
})
export class FormpageComponent implements OnInit {

  profileForm = new FormGroup({
    search: new FormControl('search'),
  });

  title: string | null | undefined;
  search: string | null | undefined;
  constructor(private route: ActivatedRoute, private router: Router, private element: ElementRef) {

  }

  ngOnInit(): void {
    this.title = this.route.snapshot.data['title'];
    this.route.queryParams.subscribe(params => {
      this.search = params['search'];
    });
  }

  clicked() {
    this.router.navigate([this.title], { queryParams: { search: this.search } });
  }

  onSubmit() {
    console.warn(this.profileForm.value);
    this.router.navigate([this.title], { queryParams: { search: this.profileForm.controls.search.value } });
  }
}
