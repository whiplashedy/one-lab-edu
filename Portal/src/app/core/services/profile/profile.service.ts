import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {ProfileModel} from './profile.model';

@Injectable({
    providedIn: 'root'
})
export class ProfileService {

    baseUrl = 'http://192.168.10.157:6060';


    constructor(private http: HttpClient) {
    }

    getById(id: string): Observable<ProfileModel> {
        return this.http.get<ProfileModel>(this.baseUrl + '/employee/search/user/' + id);
    }

    updateByName(data: ProfileModel): Observable<any> {
        let headers = new HttpHeaders();
        headers = headers.set('Content-Type', 'application/json; charset=utf-8');
        return this.http.put( this.baseUrl + '/employee/update', data, { headers });
    }

    create(data: object): Observable<any> {
        return this.http.put(this.baseUrl + '/employee/create', data);
    }

    deleteByName(name: string): Observable<any> {
        return this.http.delete(this.baseUrl + '/employee/delete/' + name);
    }


}
