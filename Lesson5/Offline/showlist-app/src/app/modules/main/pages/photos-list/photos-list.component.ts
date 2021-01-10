import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, throwError } from 'rxjs';
import { Photo } from '@data/models/photo.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PhotosService } from '@data/services/photos.service';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-photos-list',
  templateUrl: './photos-list.component.html',
  styleUrls: ['./photos-list.component.css']
})
export class PhotosListComponent implements OnInit, OnDestroy {

  readonly MAX_ELEMS_PER_PAGE = 50;
  readonly len = 5000;
  readonly maxPages = Math.ceil(this.len / this.MAX_ELEMS_PER_PAGE);

  photos$?: Observable<Photo[]>;
  photo$?: Observable<Photo>;
  sub$?: Subscription;

  startIndex = 0;
  endIndex = this.MAX_ELEMS_PER_PAGE;

  pageNumber = 0;

  constructor(private router: Router, private photosService: PhotosService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    console.log('PhotosListComponent is loaded');

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

    console.log(this.pageNumber);
    console.log(this.startIndex);
    console.log(this.endIndex);

    this.photos$ = this.photosService.getAll().pipe(
      catchError(error => {
        console.log('in photos-list component error = ', error);
        return throwError(error);
      })
    );
    this.photo$ = this.photosService.get(2);

  }

  ngOnDestroy(): void {
    console.log('PhotosListComponent is destroyed');
    this.photosService.clearCache();
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
