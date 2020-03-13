import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogTargetComponent } from './dialog-target.component';

describe('DialogTargetComponent', () => {
  let component: DialogTargetComponent;
  let fixture: ComponentFixture<DialogTargetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogTargetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogTargetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
