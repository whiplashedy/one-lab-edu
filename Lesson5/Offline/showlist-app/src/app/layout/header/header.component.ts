import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {Router} from '@angular/router';
import { AuthenticationService } from '@core/services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit, OnDestroy {
  constructor(private authenticationService: AuthenticationService, private router: Router) {
    this.currentUser = '';
  }

  currentUser: string | null | undefined;
  sub: any;

  ngOnInit(): void {
    console.log("HeaderComponent is loaded");
    this.sub = this.authenticationService.user.subscribe((user) => {
      this.currentUser = user?.email;
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
    console.log("HeaderComponent is destroyed");
  }

  logout(): void {
    this.authenticationService.logout().then(() => {
      this.router.navigate(['/auth']).then((success: boolean) => console.log(success ? 'navigating to /auth' : 'failed to navigate to /auth'));
    });
  }
}
