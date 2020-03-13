import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'app-organigram',
    templateUrl: './organigram.component.html',
    styleUrls: ['./organigram.component.scss']
})
export class OrganigramComponent implements OnInit {

    items: OrganigramModel[] = [];
    one = {
        director: {
            fio: 'Елжан Кошанов',
            position: 'Ген. директор',
            photo: 'assets/img/director.jpg'
        }
    };

    constructor(private http: HttpClient) { }

    ngOnInit() {
        this.http.get('http://192.168.10.157:6060/direction/get?name=OneTechnologies')
            .subscribe((res: OrganigramModel[]) => {
                this.items = res;
                if (this.items[0].child && this.items[0].child.length) {
                    this.items[0].child.forEach(level2 => {
                        level2.active = false;
                        if (level2.child && level2.child.length) {
                            level2.child.forEach(level3 => {
                                level3.active = false;
                            });
                        }
                    });
                }
            });
    }

    toggle(i: number) {
        const child = this.items[0].child;
        this.closeAllBlock(child, child[i]);
        child[i].active = !child[i].active;
    }

    toggleSubBlock(i: number, j: number) {
        const child = this.items[0].child[i].child;
        this.closeAllBlock(child, child[j]);
        child[j].active = !child[j].active;
    }

    private closeAllBlock(arr, child) {
        arr.forEach(e => {
            if (e.name !== child.name) {
                e.active = false;
            }
        });
        return true;
    }

}

export interface OrganigramModel {
    count: number;
    id: string;
    jsonClass: string;
    level: number;
    name: string;
    profiles: any[];
    parentDirection: string;
    child: OrganigramModel[];
    active: any;
}
