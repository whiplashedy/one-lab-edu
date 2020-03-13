import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

    events = [
        {
            event_dot: 'birthday',
            event_text: 'День рождение Ивана Иванова',
        },
        {
            event_dot: 'birthday',
            event_text: 'День рождение Ивана Иванова',
        },
        {
            event_dot: 'birthday',
            event_text: 'День рождение Ивана Иванова',
        },
        {
            event_dot: 'birthday',
            event_text: 'День рождение Ивана Иванова',
        },
        {
            event_dot: 'birthday',
            event_text: 'День рождение Ивана Иванова',
        },
        {
            event_dot: 'birthday',
            event_text: 'День рождение Ивана Иванова',
        },
        {
            event_dot: 'tasks',
            event_text: 'День сдачи задачи “One Portal”',
        },
        {
            event_dot: 'tasks',
            event_text: 'День начала задачи “Модуль поиск | FortEx”',
        },
        {
            event_dot: 'tasks',
            event_text: 'Окончательние испытательного срока Ивана Иванова',
        },
        {
            event_dot: 'standup',
            event_text: 'Standup OneLab',
        },
    ];

  constructor() { }

  ngOnInit() {
  }

}
