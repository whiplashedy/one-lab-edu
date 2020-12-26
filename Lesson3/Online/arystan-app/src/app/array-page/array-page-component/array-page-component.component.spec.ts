import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayPageComponentComponent } from './array-page-component.component';

describe('ArrayPageComponentComponent', () => {
  let component: ArrayPageComponentComponent;
  let fixture: ComponentFixture<ArrayPageComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArrayPageComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrayPageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
