import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-moveable-block',
  templateUrl: './moveable-block.component.html',
  styleUrls: ['./moveable-block.component.scss']
})
export class MoveableBlockComponent implements OnInit {

  constructor() { }

  top = 0;
  left = 0;
  @Output() showChange = new EventEmitter();

  ngOnInit() {
  }

  moveBlock() {
    const maxHeight = document.body.clientHeight;
    const maxWidth = document.body.clientWidth;
    this.left = Math.round(Math.random() * maxWidth);
    this.top = Math.round(Math.random() * maxHeight);
    this.showChange.emit({ x: this.left, y: this.top });
  }

}
