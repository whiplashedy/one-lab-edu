import {Component, OnInit} from '@angular/core';
import {ProfileService} from '../../../core/services/profile/profile.service';
import {ProfileModel} from '../../../core/services/profile/profile.model';
import {EditprofileComponent} from '../../../dashboard/profile/editprofile/editprofile.component';
import {MatDialog} from '@angular/material';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    localStorageID = localStorage.getItem('auth');
    public user = {} as ProfileModel;

    constructor(private profileService: ProfileService, private dialog: MatDialog) { }

    ngOnInit() {
        this.profileService.getById(this.localStorageID).subscribe(res => this.user = res);
    }

    logout() {
        localStorage.removeItem('auth');
        // this.router.navigateByUrl('auth/login');
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
}
