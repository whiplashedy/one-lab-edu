import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../../core/services/auth/auth.service';

@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.scss']
})
export class ForgetComponent implements OnInit {

  forgetForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.email
    ])
  });

  constructor(
      private router: Router,
      public authService: AuthService
  ) { }

  ngOnInit() {
  }

  get email() { return this.forgetForm.get('email'); }

  submit(value) {
    console.log(value);
  }
}
