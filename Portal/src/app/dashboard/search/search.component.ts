import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

    SearchControl = new FormControl();
    options: any = [];
    values = '';
    baseUrl = 'http://192.168.10.157:6060';

    Search(value: string) {
        this.values = value;
        this.httpClient.get<any[]>(this.baseUrl + '/employee/search?name=' + this.values)
            .subscribe(response => {
                this.options = response;
            });
    }

    constructor(private httpClient: HttpClient) {}

    Transform() {
        return Object.keys(this.options);
    }

    DisplayFn(subject) {
        return subject ? subject.fullName : undefined;
    }

    ngOnInit() {
        this.Transform();
    }

}
