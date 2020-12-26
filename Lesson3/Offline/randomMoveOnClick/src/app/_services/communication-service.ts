import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable()
export class CommunicationService {
  dataSrc$ = new BehaviorSubject({x: 0, y: 0});
  currentActive = this.dataSrc$.asObservable();

  constructor() { }

  changeData = (data: any) => {
    this.dataSrc$.next(data);
  }
}
