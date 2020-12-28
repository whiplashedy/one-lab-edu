import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthenticationService} from "../../../_services/authentication.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, OnDestroy {
  currentUser: any | null | undefined;
  sub: any;

  constructor(private authenticationService: AuthenticationService) {
    this.currentUser = '';
  }

  ngOnInit(): void {
    this.sub = this.authenticationService.user.subscribe((user) => {
      this.currentUser = user;
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
