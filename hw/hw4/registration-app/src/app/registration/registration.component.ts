import { Component, OnInit } from '@angular/core';
import { RegistrationModel } from '../models/registration.model';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  user: RegistrationModel = new RegistrationModel();
  registrationForm: FormGroup;
  hide = true;

  constructor(private formBuilder: FormBuilder) { 
    this.registrationForm = this.formBuilder.group({
      'name': [this.user.name, [
        Validators.required
      ]],
      'email': [this.user.email, [
        Validators.required,
        Validators.email
      ]],
      'password': [this.user.password, [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30)
      ]]
  });
}
  ngOnInit(){
    this.registrationForm.reset({
      'name': [this.user.name, [
        Validators.required
      ]],
      'email': [this.user.email, [
        Validators.required,
        Validators.email
      ]],
      'password': [this.user.password, [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30)
      ]]
  });
  }
  onRegisterSubmit() {
    alert(this.user.name + ' ' + this.user.email + ' ' + this.user.password);
  }
}
