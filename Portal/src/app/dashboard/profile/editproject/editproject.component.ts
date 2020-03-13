import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {EditprofileComponent} from '../editprofile/editprofile.component';
import {ProfileModel} from '../../../core/services/profile/profile.model';


@Component({
  selector: 'app-editproject',
  templateUrl: './editproject.component.html',
  styleUrls: ['./editproject.component.scss']
})
export class EditprojectComponent implements OnInit {
    user: ProfileModel = null;
  constructor(private dialogRef: MatDialogRef<EditprojectComponent>) { }

  closeD() {
        this.dialogRef.close();
    }
  ngOnInit() {
  }

}
