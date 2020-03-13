import {Component, Input, OnInit} from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';


@Component({
    selector: 'app-calendar',
    templateUrl: './calendar.component.html',
    styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

    calendarPlugins = [dayGridPlugin];
    @Input() events;
    options;

    constructor() {

    }

    ngOnInit() {

        this.options = {
            themSystem: 'standart',
            header: {
                left: 'dayGridMonth, dayGrid',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,timeGridDay'
            },
            locale: 'ru',
        };

    }
}
