import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlyCalendarComponent } from './only-calendar.component';

describe('OnlyCalendarComponent', () => {
  let component: OnlyCalendarComponent;
  let fixture: ComponentFixture<OnlyCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlyCalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlyCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
