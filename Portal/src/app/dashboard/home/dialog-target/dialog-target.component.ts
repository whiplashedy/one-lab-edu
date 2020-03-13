import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-dialog-target',
  templateUrl: './dialog-target.component.html',
  styleUrls: ['./dialog-target.component.scss']
})
export class DialogTargetComponent implements OnInit {

    form: FormGroup;
    constructor(private dialogRef: MatDialogRef<DialogTargetComponent>) { }

  closeD() {
      this.dialogRef.close();
  }

  ngOnInit() {
  }

}
