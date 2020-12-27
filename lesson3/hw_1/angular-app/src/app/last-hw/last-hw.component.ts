import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-last-hw',
  templateUrl: './last-hw.component.html',
  styleUrls: ['./last-hw.component.css']
})
export class LastHwComponent implements OnInit {
  names = [];
  abc = [];


add() {
  this.names.push((<HTMLInputElement>document.querySelector('#i1')).value, (<HTMLInputElement>document.querySelector('#i2')).value);
  this.abc.push((<HTMLInputElement>document.querySelector('#i3')).value, (<HTMLInputElement>document.querySelector('#i4')).value);

  this.names = this.names.map((item) => item.toUpperCase());

  let shortAbc = this.abc.filter((item) => {
  return item.length < 5
  });
 

  const element = document.createElement('div');
  element.innerHTML = `
      <div>
          <h2> Names Uppercase:${this.names} </h2> <br>
          <h2>Less than five:${shortAbc}</h2> <br>
      </div>
  `;
  document.querySelector('.b').appendChild(element);
}
  constructor() { }

  ngOnInit(): void {
  }

}
