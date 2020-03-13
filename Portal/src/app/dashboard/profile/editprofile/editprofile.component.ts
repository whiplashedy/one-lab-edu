import {Component, Inject, OnInit, Optional} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef, MatSnackBar} from '@angular/material';
import {ProfileService} from '../../../core/services/profile/profile.service';
import {ProfileModel} from '../../../core/services/profile/profile.model';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-editprofile',
    templateUrl: './editprofile.component.html',
    styleUrls: ['./editprofile.component.scss']
})
export class EditprofileComponent implements OnInit {
    teamleads = [];
    localStorageID = localStorage.getItem('auth');
    user = {} as any;

    userForm = new FormGroup({
        id: new FormControl(this.localStorageID),
        teamlead: new FormControl('', [
            Validators.required
        ]),
        photo: new FormControl(''),
        position: new FormControl(''),
        hobbies: new FormControl(''),
        projects: new FormControl(''),
        fullName: new FormControl('', [
            Validators.minLength(3),
            Validators.required
        ]),
        gender: new FormControl('', [
            Validators.required
        ]),
        phone: new FormControl('', [
            Validators.minLength(11),
            Validators.required
        ]),
        birthday: new FormControl('', [
            Validators.required
        ]),
        status: new FormControl('', [
            Validators.required
        ]),
        aboutMyself: new FormControl('', [
            Validators.required
        ])
    });

    constructor(
        public dialogRef: MatDialogRef<EditprofileComponent>,
        @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
        private profileService: ProfileService,
        private snackBar: MatSnackBar,
        private http: HttpClient
    ) {
        this.http.get<[]>('assets/teamlead.json').subscribe(response => {
            console.log('Responce', response);
            this.teamleads = response;
        });
    }


    ngOnInit() {
        this.profileService.getById(this.localStorageID).subscribe(res => {
            this.user = res;
            this.userForm.get('id').setValue(this.user.id);
            this.userForm.get('teamlead').setValue(this.user.teamlead);
            this.userForm.get('photo').setValue(this.user.photo);
            this.userForm.get('position').setValue(this.user.position);
            this.userForm.get('hobbies').setValue(this.user.hobbies);
            this.userForm.get('projects').setValue(this.user.projects);
            this.userForm.get('fullName').setValue(this.user.fullName);
            this.userForm.get('gender').setValue(this.user.gender);
            this.userForm.get('phone').setValue(this.user.phone);
            this.userForm.get('birthday').setValue(this.user.birthday);
            this.userForm.get('status').setValue(this.user.status);
            this.userForm.get('aboutMyself').setValue(this.user.aboutMyself);
        });
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

    submit() {
        /*console.log(this.userForm.value);
        this.user.direction = {
            level: 3,
            name: 'Frontend',
            parentDirection: 'R&D'
        };*/
        this.profileService.updateByName(this.userForm.value).subscribe((res: any) => {
            console.log(res);
            this.openSnackBar('Профиль успешно обновлено!', 'OK');
            this.dialogRef.close();
        });
    }

    openSnackBar(message: string, action: string) {
        this.snackBar.open(message, action, {
            duration: 4000,
        });
    }

}
