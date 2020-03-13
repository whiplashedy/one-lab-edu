import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef, MatSnackBar} from '@angular/material';
import {ProfileService} from '../../../core/services/profile/profile.service';
import {ProfileModel, ProjectModel} from '../../../core/services/profile/profile.model';

@Component({
  selector: 'app-projects-form',
  templateUrl: './projects-form.component.html',
  styleUrls: ['./projects-form.component.scss']
})
export class ProjectsFormComponent implements OnInit {

    private localStorageID = localStorage.getItem('auth');
    user: ProfileModel;
    existProjects = {
        business: [
            'ForteClub',
            'ForteExchange',
            'ForteMarket',
            'ForteKassa',
            'ForteBusiness - ИБ юр.лиц',
            'ForteMain',
            'ForteTravel',
            'BPM',
            'Anthill',
            'ForteApp',
            'ChatBot',
            'Forte E-com',
            'Wallet',
            'CreditOn',
            'One Portal',
            'R&D Dashboard',
            'Data science unit',
            'General',
            'Help Desk',
            'Infrastructure',
            'DevOps',
        ],
        // infrastructure: ['ForteBPM', 'Anthill'],
        // roznisa: ['Forte.kz', 'ForteTravel', 'ForteMarket', 'TalkIn', 'ForteBank', 'ForteEx', 'CreditOn', 'ONE/wallet', 'ONE/loyalty']
    };

    constructor(
        public dialogRef: MatDialogRef<ProjectsFormComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        private profileService: ProfileService,
        private snackBar: MatSnackBar
    ) { }

    ngOnInit() {
        this.profileService.getById(this.localStorageID).subscribe(res => {
            this.user = res;
        });
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

    addItem(value: string) {
        const toSave: ProjectModel = {
            name: value,
            startDate: '',
            endDate: '',
            task: ''
        };
        if (this.user.projects && this.user.projects.length) {
            const index = this.user.projects.map(e => e.name).indexOf(value);
            if (index > -1) {
                this.user.projects.splice(index, 1);
            } else {
                this.user.projects.push(toSave);
            }
        } else {
            this.user.projects = [];
            this.user.projects.push(toSave);
        }
    }

    isActive(value: string) {
        if (this.user && this.user.projects && this.user.projects.length) {
            const index = this.user.projects.map(e => e.name).indexOf(value);
            return index > -1;
        }
        return false;
    }

    submit() {
        if (this.user.projects.length === 0) {
            this.user.projects = [null];
        }
        this.profileService.updateByName(this.user).subscribe(() => {
            this.openSnackBar('Данные сохранены!', 'OK');
            this.dialogRef.close();
        });
    }

    openSnackBar(message: string, action: string) {
        this.snackBar.open(message, action, {
            duration: 4000,
        });
    }

}
