import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MustMatch} from '../_helpers/must-match.validator';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {
    this.submitted = false;
    this.registerForm = this.formBuilder.group(
      {
        gender: ['', Validators.required],
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        patronymic: ['', Validators.nullValidator],
        city: ['', Validators.nullValidator],
        state: ['', Validators.nullValidator],
        country: ['', Validators.nullValidator],
        dob: ['', [Validators.required, Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)]], // validates date format yyyy-mm-dd
        email: ['', [Validators.required, Validators.email]],
        bio: ['', Validators.maxLength(20)],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required],
        acceptTerms: [false, Validators.requiredTrue],
        acceptUpdates: [false, Validators.nullValidator]
      },
      {
        validator: MustMatch('password', 'confirmPassword')
      }
    );
  }

  ngOnInit(): void {
  }
  onSubmit(): void {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    alert('SUBMITTED!\n\n' + JSON.stringify(this.registerForm.value, null, 4));
  }

  onReset(): void {
    this.submitted = false;
    this.registerForm.reset();
  }
}
