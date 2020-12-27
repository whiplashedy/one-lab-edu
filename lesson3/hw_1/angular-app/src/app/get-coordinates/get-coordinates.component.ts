import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-coordinates',
  templateUrl: './get-coordinates.component.html',
  styleUrls: ['./get-coordinates.component.css']
})
export class GetCoordinatesComponent implements OnInit {

  coordinates() {
    const div = document.querySelector('.container'); 
    let rect = div.getBoundingClientRect();
    alert(`Coordinates: ${rect.top} ${rect.right} ${rect.bottom} ${rect.left}`);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
