import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-my-comp',
  templateUrl: './my-comp.component.html',
  styleUrls: ['./my-comp.component.css'],
  template: '<h1>{{title}}</h1>'
})
export class MyCompComponent {
  title='hello';
  assign(val1,val2,val3,val4)
  {
    let ar1 = [val1, val2];
    let ar2 = [val3, val4];
    let arr=[...ar1,...ar2];
    console.log(arr.filter((v) => v.length>2));
  }

  @Output("getval") getval: EventEmitter<any> = new EventEmitter();

}
