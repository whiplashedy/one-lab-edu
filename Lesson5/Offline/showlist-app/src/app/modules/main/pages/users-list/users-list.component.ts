import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable, of, range, Subscriber, Subscription, throwError } from 'rxjs';
import { catchError, take, tap, map } from 'rxjs/operators';
import { User } from '@data/models/user.model';
import { UsersService } from '@data/services/users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit, OnDestroy {

  readonly MAX_ELEMS_PER_PAGE = 7;
  readonly len = 10;
  readonly maxPages = Math.ceil(this.len / this.MAX_ELEMS_PER_PAGE);

  users$?: Observable<User[]>;
  user$?: Observable<User>;
  sub$?: Subscription;

  startIndex = 0;
  endIndex = this.MAX_ELEMS_PER_PAGE;

  pageNumber = 0;

  constructor(private router: Router, private usersService: UsersService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    console.log('UsersListComponent is loaded');

    this.sub$ = this.activatedRoute.queryParams.subscribe(params => {
      if (((params['page'] != null) && (params['page'] !== '') && !isNaN(Number(params['page'])))) {
        this.pageNumber = Number(params['page']);
      } else {
        this.pageNumber = 0;
      }
      if (this.pageNumber > this.maxPages) {
        this.pageNumber = this.maxPages - 1;
      }
      this.startIndex = this.pageNumber * this.MAX_ELEMS_PER_PAGE;
      this.endIndex = Math.min((this.pageNumber + 1) * this.MAX_ELEMS_PER_PAGE, this.len + 1);
    });

    this.users$ = this.usersService.getAll().pipe(
      catchError(error => {
        console.log('in users-list component error = ', error);
        return throwError(error);
      })
    );
    this.user$ = this.usersService.get(2);
  }

  ngOnDestroy(): void {
    console.log('UsersListComponent is destroyed');
    this.usersService.clearCache();
    if (this.sub$) {
      this.sub$.unsubscribe();
    }
  }

  onPageClick(pageNumber: number): void {
    console.log("page number = ", pageNumber);

    this.pageNumber = pageNumber;
    this.startIndex = pageNumber * this.MAX_ELEMS_PER_PAGE;
    this.endIndex = Math.min((this.pageNumber + 1) * this.MAX_ELEMS_PER_PAGE, this.len + 1);

    console.log(this.pageNumber);
    console.log(this.startIndex);
    console.log(this.endIndex);

    const queryParams: Params = { page: pageNumber.toString() };
    this.router.navigate(
      [],
      {
        relativeTo: this.activatedRoute,
        queryParams: queryParams,
        replaceUrl: true,
        queryParamsHandling: 'merge'
      });
  }
}
