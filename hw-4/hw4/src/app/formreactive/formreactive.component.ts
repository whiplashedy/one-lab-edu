import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormControl, FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-formreactive',
  templateUrl: './formreactive.component.html',
  styleUrls: ['./formreactive.component.scss']
})
export class FormreactiveComponent implements OnInit {


  form:FormGroup;
  // form = new FormGroup({

  //   firstName:new FormControl('',Validators.required),
  //   lastName:new FormControl('',Validators.required),
  //   email:new FormControl('',Validators.required),
  //   password:new FormControl('',Validators.required)

  // })

  constructor
  (
    private fb:FormBuilder
  ) 
  {}


  ngOnInit(): void {

      this.form = this.fb.group(
        {field:this.fb.control("",[Validators.required,Validators.minLength(5)])
        });


  }

}
