import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hw33';
  top = 0;
  left = 0;

  handleUpdates({ x, y }) {
    this.top = y;
    this.left = x;
  }
}
