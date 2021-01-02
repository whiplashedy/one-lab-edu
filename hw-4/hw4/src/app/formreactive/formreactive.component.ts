import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-formreactive',
  templateUrl: './formreactive.component.html',
  styleUrls: ['./formreactive.component.scss']
})
export class FormreactiveComponent implements OnInit {

  form = new FormGroup({

    firstName:new FormControl('',Validators.required)

  })

  constructor() { }


  ngOnInit(): void {
  }

}
