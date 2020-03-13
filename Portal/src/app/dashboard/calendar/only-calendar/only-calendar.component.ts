import {Component, OnInit} from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';

@Component({
    selector: 'app-only-calendar',
    templateUrl: './only-calendar.component.html',
    styleUrls: ['./only-calendar.component.scss']
})
export class OnlyCalendarComponent implements OnInit {

    calendarPlugins = [dayGridPlugin];
    options;

    public events = [
        {
            title: 'Test1',
            date: '2019-12-15',
            color: 'orange',
        }
    ];

    constructor() {}

    ngOnInit() {

        this.options = {
            header: {
                left: 'prev',
                center: 'title',
                right: 'next',
            },
            locale: 'ru',
        };
    }
}
