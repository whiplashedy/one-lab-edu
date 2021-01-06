import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement, reset } from '../counter.actions';

@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
  styleUrls: ['./my-counter.component.css'],
})
export class MyCounterComponent {
  count$: Observable<number>;

  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.select('count');
  }

  // tslint:disable-next-line:typedef
  increment() {
    this.store.dispatch(increment());
  }

  // tslint:disable-next-line:typedef
  decrement() {
    this.store.dispatch(decrement());
  }

  // tslint:disable-next-line:typedef
  reset() {
    this.store.dispatch(reset());
  }
}
