import {Component, ElementRef, OnInit} from '@angular/core';

@Component({
    selector: 'app-sidenav',
    templateUrl: './sidenav.component.html',
    styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

    open = false;

    constructor(private el: ElementRef) { }

    ngOnInit() {
    }

    toggle() {
        this.open = !this.open;
        const menuContainer = this.el.nativeElement.children[0];
        if (this.open) {
            menuContainer.classList.add('open');
        } else {
            menuContainer.classList.remove('open');
        }
    }

    close() {
        this.open = false;
        const menuContainer = this.el.nativeElement.children[0];
        menuContainer.classList.remove('open');
    }

}
