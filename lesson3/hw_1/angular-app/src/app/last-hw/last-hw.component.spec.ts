import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastHwComponent } from './last-hw.component';

describe('LastHwComponent', () => {
  let component: LastHwComponent;
  let fixture: ComponentFixture<LastHwComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LastHwComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LastHwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
