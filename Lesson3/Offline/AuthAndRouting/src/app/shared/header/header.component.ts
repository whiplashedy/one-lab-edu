import {AfterViewInit, Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import { AuthenticationService } from '../../_services/authentication.service';
import {Router} from "@angular/router";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit, AfterViewInit, OnDestroy {
  constructor(private authenticationService: AuthenticationService, private router: Router) {
    this.currentUser = '';
  }

  currentUser: string | null | undefined;
  sub: any;

  ngOnInit(): void {
    this.sub = this.authenticationService.user.subscribe((user) => {
      this.currentUser = user?.email;
    });
  }

  ngAfterViewInit(): void {

  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  logout(): void {
    this.authenticationService.logout().then(() => {
      this.router.navigate(['/auth']);
    });
  }
}
