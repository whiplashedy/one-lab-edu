import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {DialogTargetComponent} from '../dialog-target/dialog-target.component';
import {MatProgressBar} from '@angular/material/progress-bar';

@Component({
  selector: 'app-targets',
  templateUrl: './targets.component.html',
  styleUrls: ['./targets.component.scss']
})

export class TargetsComponent implements OnInit {
    targets: [];
    filename = 'targets';
    hideElement = false;
    constructor(private http: HttpClient, private dialog: MatDialog) {
        this.http.get<[]>('assets/' + this.filename + '.json')
            .subscribe(response => {
                this.targets = response;
                // let result = [];
                // const count = 0;
                // const images = [];
                // this.targets.forEach((element) => {
                //     result = element['modules_data'];
                //         console.log(result);
                // });
            });
    }
    ngOnInit() {
    }
    openDialog() {
        const dialogConfig = new MatDialogConfig();
        this.dialog.open(DialogTargetComponent, dialogConfig);
    }
    hiden() {
        this.hideElement = !this.hideElement;
    }
}

