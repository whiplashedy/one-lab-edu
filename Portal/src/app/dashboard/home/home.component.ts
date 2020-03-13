import { Component, OnInit} from '@angular/core';
import {ProfileService} from '../../core/services/profile/profile.service';
import {ProfileModel} from '../../core/services/profile/profile.model';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})

export class HomeComponent implements OnInit {

    localStorageID = localStorage.getItem('auth');
    public user = {} as ProfileModel;

    lentaItems = [
        {
            user: {
                fio: 'Вася Пупкин',
                photo: 'https://www.alexsears.com/images/alex.jpeg',
            },
            info: {
                title: 'Выполнена задача',
                desc: '“Редизайн страницы”',
                comment: '',
            },
            time: '15:07',
            dot: 'dot-green'
        },
        {
            user: {
                fio: 'Иван Иванов',
                photo: 'https://www.alexsears.com/images/alex.jpeg',
            },
            info: {
                title: 'Прокомментировал задачу',
                desc: '“Редизайн страницы”',
                comment: 'Ну давай, дерзай!',
            },
            time: '15:15',
            dot: 'dot-grey'
        },
        {
            user: {
                fio: 'Вася Пупкин',
                photo: 'https://www.alexsears.com/images/alex.jpeg',
            },
            info: {
                title: 'Поставлена новая задача',
                desc: '“Сборка Wireframe 22”',
                comment: '',
            },
            time: '16:17',
            dot: 'dot-blue'
        },
        {
            user: {
                fio: 'Вася Пупкин',
                photo: 'https://www.alexsears.com/images/alex.jpeg',
            },
            info: {
                title: 'Прикрепил файл к задаче',
                desc: '“Сборка Wireframe 22”',
                comment: '',
            },
            time: '17:01',
            dot: 'dot-yellow'
        },
        {
            user: {
                fio: 'Иван Иванов',
                photo: 'https://www.alexsears.com/images/alex.jpeg',
            },
            info: {
                title: 'Прикрепил файл к задаче',
                desc: '“Сборка Wireframe 22”',
                comment: '',
            },
            time: '17:07',
            dot: 'dot-yellow'
        },
        {
            user: {
                fio: 'Иван Иванов',
                photo: 'https://www.alexsears.com/images/alex.jpeg',
            },
            info: {
                title: 'Прокомментировал задачу',
                desc: '“Редизайн страницы”',
                comment: 'Прикрепи файл к задаче!',
            },
            time: '17:07',
            dot: 'dot-grey'
        },
        {
            user: {
                fio: 'Вася Пупкин',
                photo: 'https://www.alexsears.com/images/alex.jpeg',
            },
            info: {
                title: 'Выполнена задача',
                desc: '“Редизайн страницы”',
                comment: '',
            },
            time: '15:07',
            dot: 'dot-yellow'
        },
        {
            user: {
                fio: 'Иван Иванов',
                photo: 'https://www.alexsears.com/images/alex.jpeg',
            },
            info: {
                title: 'Прокомментировал задачу',
                desc: '“Редизайн страницы”',
                comment: 'Ну давай, дерзай!',
            },
            time: '15:15',
            dot: 'dot-grey'
        },
        {
            user: {
                fio: 'Вася Пупкин',
                photo: 'https://www.alexsears.com/images/alex.jpeg',
            },
            info: {
                title: 'Поставлена новая задача',
                desc: '“Сборка Wireframe 22”',
                comment: '',
            },
            time: '16:17',
            dot: 'dot-blue'
        },
        {
            user: {
                fio: 'Вася Пупкин',
                photo: 'https://www.alexsears.com/images/alex.jpeg',
            },
            info: {
                title: 'Прикрепил файл к задаче',
                desc: '“Сборка Wireframe 22”',
                comment: '',
            },
            time: '17:01',
            dot: 'dot-yellow'
        },
        {
            user: {
                fio: 'Иван Иванов',
                photo: 'https://www.alexsears.com/images/alex.jpeg',
            },
            info: {
                title: 'Прикрепил файл к задаче',
                desc: '“Сборка Wireframe 22”',
                comment: '',
            },
            time: '17:07',
            dot: 'dot-yellow'
        },
        {
            user: {
                fio: 'Иван Иванов',
                photo: 'https://www.alexsears.com/images/alex.jpeg',
            },
            info: {
                title: 'Прокомментировал задачу',
                desc: '“Редизайн страницы”',
                comment: 'Прикрепи файл к задаче!',
            },
            time: '17:07',
            dot: 'dot-grey'
        },
        {
            user: {
                fio: 'Вася Пупкин',
                photo: 'https://www.alexsears.com/images/alex.jpeg',
            },
            info: {
                title: 'Выполнена задача',
                desc: '“Редизайн страницы”',
                comment: '',
            },
            time: '15:07',
            dot: 'dot-yellow'
        },
        {
            user: {
                fio: 'Иван Иванов',
                photo: 'https://www.alexsears.com/images/alex.jpeg',
            },
            info: {
                title: 'Прокомментировал задачу',
                desc: '“Редизайн страницы”',
                comment: 'Ну давай, дерзай!',
            },
            time: '15:15',
            dot: 'dot-grey'
        },
        {
            user: {
                fio: 'Вася Пупкин',
                photo: 'https://www.alexsears.com/images/alex.jpeg',
            },
            info: {
                title: 'Поставлена новая задача',
                desc: '“Сборка Wireframe 22”',
                comment: '',
            },
            time: '16:17',
            dot: 'dot-blue'
        },
        {
            user: {
                fio: 'Вася Пупкин',
                photo: 'https://www.alexsears.com/images/alex.jpeg',
            },
            info: {
                title: 'Прикрепил файл к задаче',
                desc: '“Сборка Wireframe 22”',
                comment: '',
            },
            time: '17:01',
            dot: 'dot-yellow'
        },
        {
            user: {
                fio: 'Иван Иванов',
                photo: 'https://www.alexsears.com/images/alex.jpeg',
            },
            info: {
                title: 'Прикрепил файл к задаче',
                desc: '“Сборка Wireframe 22”',
                comment: '',
            },
            time: '17:07',
            dot: 'dot-yellow'
        },
        {
            user: {
                fio: 'Иван Иванов',
                photo: 'https://www.alexsears.com/images/alex.jpeg',
            },
            info: {
                title: 'Прокомментировал задачу',
                desc: '“Редизайн страницы”',
                comment: 'Прикрепи файл к задаче!',
            },
            time: '17:07',
            dot: 'dot-grey'
        }
    ];

    constructor(private profileService: ProfileService) {}

    ngOnInit() {
        this.profileService.getById(this.localStorageID).subscribe(res => {
            this.user = res;
        });

    }

}
