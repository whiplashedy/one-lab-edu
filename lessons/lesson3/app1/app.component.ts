import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'application';
  
  getval(subEvent)
  {
    let elem = document.getElementById(subEvent);
    let coords = elem.getBoundingClientRect();
    alert("X: "+ coords.left +","+ "Y: "+ coords.right);
  }
}
