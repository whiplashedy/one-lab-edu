import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

    teams = [
        {
            username: 'Ертай Касымбаев',
            user_avatar: 'kassymbayev.jpg',
            position: 'Frontend разработчик',
            qualification: 'Junior 1',
            projects: ['OnePortal'],
        },
        {
            username: 'Алена Регатунова',
            user_avatar: 'alena.jpg',
            position: 'UI/UX дизайнер',
            qualification: 'Тимлид',
            projects: ['ForteMarket', 'FortEx', 'DarMove'],
        },
        {
            username: 'Мария Пак',
            user_avatar: 'maria.jpg',
            position: 'UI/UX дизайнер',
            qualification: 'Senior 3',
            projects: ['ForteMarket', 'FortEx', 'CreditOn', 'Forte.kz'],
        },
    ];

  constructor() { }

  ngOnInit() {
  }

}
