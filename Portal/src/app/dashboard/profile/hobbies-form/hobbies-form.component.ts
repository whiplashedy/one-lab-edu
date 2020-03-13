import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef, MatSnackBar} from '@angular/material';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ProfileService} from '../../../core/services/profile/profile.service';
import {ProfileModel} from '../../../core/services/profile/profile.model';

@Component({
  selector: 'app-hobbies-form',
  templateUrl: './hobbies-form.component.html',
  styleUrls: ['./hobbies-form.component.scss']
})
export class HobbiesFormComponent implements OnInit {

    localStorageID = localStorage.getItem('auth');
    user = {} as ProfileModel;
    items = [
        'танцы', 'йога', 'волейбол', 'шахмат', 'плавание', 'программирование',
        'Adobe Photoshop', 'Illustrator', 'Java', 'Swift'
    ];
    hobbieForm = new FormGroup({
        name: new FormControl('', [
            Validators.minLength(3),
            Validators.required
        ])
    });

    constructor(
        public dialogRef: MatDialogRef<HobbiesFormComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        private profileService: ProfileService,
        private snackBar: MatSnackBar
    ) {}

    ngOnInit() {
        this.profileService.getById(this.localStorageID).subscribe(res => this.user = res);
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

    addToItem(val: string) {
        if (this.user.hobby && this.user.hobby.length) {
            this.user.hobby.push(val);
        } else {
            this.user.hobby = [];
            this.user.hobby.push(val);
        }
    }

    submit() {
        if (this.user.hobby.length === 0) {
            this.user.hobby = [null];
        }
        this.profileService.updateByName(this.user).subscribe(() => {
            this.openSnackBar('Данные сохранены!', 'OK');
            this.dialogRef.close();
        });
    }

    remove(index) {
        if (this.user.hobby && this.user.hobby.length) {
            this.user.hobby.splice(index, 1);
        }
        /*this.profileService.updateByName(this.user).subscribe(() => {
            this.hobbieForm.reset();
            this.openSnackBar('Хобби успешно удалено!', 'OK');
        });*/
    }

    openSnackBar(message: string, action: string) {
        this.snackBar.open(message, action, {
            duration: 4000,
        });
    }
}
