import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-example-form',
  templateUrl: './example-form.component.html',
  styleUrls: ['./example-form.component.scss']
})
export class ExampleFormComponent implements OnInit {
  isValidFormSubmitted = null;



  onSubmit() {
        // console.warn(this.exampleForm.value);
        this.isValidFormSubmitted = false;
        if (this.exampleForm.valid) {
          alert('Successfully registered!');
          this.isValidFormSubmitted = true;
        }
        else {
          alert('Please, try again! Not valid')
          return;
        }
  }
  // constructor(private fb: FormBuilder) { 
    
  // }



  exampleForm : FormGroup;
    constructor(private fb: FormBuilder){
        this.exampleForm = fb.group({
            firstName: ['', [Validators.required, Validators.maxLength(15)]],
            lastName: ['', [Validators.required, Validators.minLength(3)]],
            nickName: ['', [Validators.required,  Validators.pattern('[a-zA-Z ]*')]],
            eMail: ['', [ Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
            dateOfBirth: ['', [Validators.required]],         
            phoneNumber: ['', [Validators.required, Validators.pattern("(87)[0-9]{9}")]],
            studentID: ['', [Validators.required, Validators.pattern('[^A-Za-z0-9]+')]],
            zipCode: ['', [Validators.required, this.zipCodeValidator]],
            address: ['', [Validators.required, Validators.pattern('^[#.0-9a-zA-Z\s,-]+$')]]
        });
    }
    zipCodeValidator(control: FormControl): {[s:string]:boolean}{
      const reg = new RegExp('(00)[0-9]{5}');
      if(reg.test(control.value)){
          return {"zipCode": true};
      }
      return null;
    }
  ngOnInit(): void {
  }

}
