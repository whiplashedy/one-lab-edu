import { rendererTypeName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'hw4';

  nameControl:FormControl;
  fullnameControl:FormGroup;
 

  ngOnInit()
  {
    this.nameControl = new FormControl('Sanzhar');
    
    this.nameControl.valueChanges.subscribe((value) =>console.log(value));
    this.nameControl.statusChanges.subscribe((status)=>{
    console.log(this.nameControl.errors);
    console.log(status);
   });
   
   this.fullnameControl = new FormGroup({
      name:new FormControl('',[Validators.required,Validators.minLength(5)]),
      surname:new FormControl('',[Validators.required,Validators.minLength(5)]),
      number:new FormControl('',[Validators.required,Validators.minLength(5)]),
      adress:new FormControl('',[Validators.required,Validators.minLength(5)]),
      id:new FormControl('',[Validators.required,Validators.minLength(5)]),
      country:new FormControl('',[Validators.required,Validators.minLength(5)]),
      city:new FormControl('',[Validators.required,Validators.minLength(5)]),
      email:new FormControl('',[Validators.required,Validators.minLength(5)]) ,
      fathersname:new FormControl('',[Validators.required,Validators.minLength(5)]),
      mothersname:new FormControl('',[Validators.required,Validators.minLength(5)])
    });
    
    this.fullnameControl.valueChanges.subscribe((value) => console.log(value));
    this.fullnameControl.statusChanges.subscribe((status)=>console.log(status));
  }
}
 function myValidator(number)
 {
   return function (formControl:FormControl)
   {
     if(formControl.value.length<number)
     {
       return{}
     }
   }
 }

