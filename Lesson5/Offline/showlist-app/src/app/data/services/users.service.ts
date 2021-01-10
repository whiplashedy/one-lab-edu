import { Injectable } from '@angular/core';
import { DataModule } from '@data/data.module';
import { Observable } from 'rxjs';
import { Photo } from '@data/models/photo.model';
import { ApiService } from '@data/services/api.service';
import { map, publishReplay, refCount } from 'rxjs/operators';
import { User } from '@data/models/user.model';

@Injectable({
  providedIn: DataModule
})
export class UsersService {

  private readonly usersUrl = '/users/';
  private users$: Observable<User[]> | undefined | null;
  constructor(private apiService: ApiService) {
    console.log('UsersService is loaded');
  }

  getAll(): Observable<User[]> {
    if (!this.users$) {
      this.users$ = this.apiService.get(this.usersUrl).pipe(
        map(data => {
          console.log('getAll data is ', data);
          return data;
        }),
        publishReplay(1),
        refCount()
      );
    }
    return this.users$;
  }
  get(photoId: number): Observable<User> {
    return this.apiService.get(this.usersUrl + photoId.toString()).pipe(
      map(data => {
        console.log('get data is ', data);
        return data;
      })
    );
  }

  clearCache(): void {
    this.users$ = null;
  }
}
