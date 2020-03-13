import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../core/services/profile/profile.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {ProfileModel} from '../../core/services/profile/profile.model';
import {MatDialog} from '@angular/material';
import {ProjectsFormComponent} from './projects-form/projects-form.component';
import {HobbiesFormComponent} from './hobbies-form/hobbies-form.component';
import {EditprofileComponent} from './editprofile/editprofile.component';
import {MatDialogConfig} from '@angular/material/dialog';
import {EditprojectComponent} from './editproject/editproject.component';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

    localStorageID = localStorage.getItem('auth');
    user: ProfileModel = null;
    dataUser = new FormGroup({
        name: new FormControl('', [
            Validators.minLength(3),
            Validators.required
        ]),
        lastName: new FormControl('', [
            Validators.minLength(3),
            Validators.required
        ]),
        email: new FormControl('', [
            Validators.email,
            Validators.required
        ]),
        phone: new FormControl('', [
            Validators.minLength(11),
            Validators.required
        ]),
        position: new FormControl('', [
            Validators.required
        ])
    });
    allProjectsCollapse = false;
    hideElement = true;
    hidetext = 'Показать';

    constructor(
        private profileService: ProfileService,
        private dialog: MatDialog
    ) {}

    ngOnInit() {
        this.profileService.getById(this.localStorageID).subscribe(res => this.user = res);
    }

    openProjectDialog(): void {
        const dialogRef = this.dialog.open(ProjectsFormComponent, { width: '700px' });
        dialogRef.afterClosed().subscribe(result => {
            this.profileService.getById(this.localStorageID).subscribe(res => this.user = res);
        });
    }

    openHobbieDialog(): void {
        const dialogRef = this.dialog.open(HobbiesFormComponent, { width: '700px' });
        dialogRef.afterClosed().subscribe(result => {
            this.profileService.getById(this.localStorageID).subscribe(res => this.user = res);
        });
    }

    openEditDialog(user: ProfileModel): void {
        const dialogRef = this.dialog.open(EditprofileComponent, {
            width: '500px',
            data: user
        });
        dialogRef.afterClosed().subscribe(result => {
            setTimeout(() => {
                this.profileService.getById(this.localStorageID).subscribe(res => this.user = res);
            }, 500);
        });
    }
    openEditProjectDialog() {
        const dialogConfig = new MatDialogConfig();
        this.dialog.open(EditprojectComponent, dialogConfig);
    }

    hiden() {
        this.hideElement = !this.hideElement;
        if (this.hideElement === true) {
            this.hidetext = 'Показать';
        } else {
            this.hidetext = 'Cкрыть';
        }
    }

    toggleAllProject() {
        this.allProjectsCollapse = !this.allProjectsCollapse;
    }

}
