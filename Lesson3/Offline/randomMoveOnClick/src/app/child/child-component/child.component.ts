import {Component, ElementRef, OnDestroy, OnInit, Output, Renderer2} from '@angular/core';

import { HostListener } from '@angular/core';
import { EventEmitter } from '@angular/core';
import {CommunicationService} from "../../_services/communication-service";

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnDestroy {

  animating = false;
  polling: any;

  constructor(private element: ElementRef, private renderer: Renderer2, private communicationService: CommunicationService) {

  }

  ngOnDestroy(): void {
    if (this.polling) {
      clearInterval(this.polling);
    }
  }

  ngOnInit(): void {
    const tmpData = (this.element.nativeElement.getBoundingClientRect());
    this.communicationService.changeData({x: tmpData.x, y: tmpData.y});
  }

  getRandomInt = (min: number, max: number) => {
    return Math.floor(Math.random() * Math.floor(max - min)) + min;
  }

  randomMoveAnimation = () => {
    const toLeft = (this.getRandomInt(10, 80).toString()) + 'vw';
    const toTop = (this.getRandomInt(10, 80).toString()) + 'vh';

    const animation = this.element.nativeElement.animate([
        {
          left: getComputedStyle(this.element.nativeElement).left,
          top: getComputedStyle(this.element.nativeElement).top
        },
        {
          left: toLeft,
          top: toTop
        }
      ],
      {
        duration: this.getRandomInt(1000, 1500)
      }
    );
    animation.onfinish = (() => {
      animation.cancel();
      this.renderer.setStyle(this.element.nativeElement, 'left', toLeft);
      this.renderer.setStyle(this.element.nativeElement, 'top', toTop);
      this.randomMoveAnimation();
    });
  }

  @HostListener('click', ['$event.target']) onClick(btn: any) {
    if (!this.animating) {
      this.animating = true;
      this.element.nativeElement.querySelector('p').innerHTML = '';
      this.randomMoveAnimation();
      this.polling = setInterval(() => {
        const tmpData = (this.element.nativeElement.getBoundingClientRect());
        this.communicationService.changeData({x: tmpData.x, y: tmpData.y});
      }, 100);
    }
  }

}
