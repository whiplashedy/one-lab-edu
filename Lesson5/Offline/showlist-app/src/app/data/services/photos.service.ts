import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable, of, throwError } from 'rxjs';
import { Photo } from '../models/photo.model';
import { catchError, map, publishReplay, refCount } from 'rxjs/operators';
import { DataModule } from '../data.module';

@Injectable({
  providedIn: DataModule
})
export class PhotosService {

  private readonly photosUrl = '/photos/';
  private photos$: Observable<Photo[]> | undefined | null;
  constructor(private apiService: ApiService) {
    console.log('PhotosService is loaded');
  }

  getAll(): Observable<Photo[]> {
    if (!this.photos$) {
      this.photos$ = this.apiService.get(this.photosUrl).pipe(
        map(data => {
          console.log('getAll data is ', data);
          return data;
        }),
        publishReplay(1),
        refCount()
      );
    }
    return this.photos$;
  }
  get(photoId: number): Observable<Photo> {
    return this.apiService.get(this.photosUrl + photoId.toString()).pipe(
      map(data => {
        console.log('get data is ', data);
        return data;
      })
    );
  }

  clearCache(): void {
    this.photos$ = null;
  }
}
