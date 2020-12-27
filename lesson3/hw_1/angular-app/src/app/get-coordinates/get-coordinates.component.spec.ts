import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetCoordinatesComponent } from './get-coordinates.component';

describe('GetCoordinatesComponent', () => {
  let component: GetCoordinatesComponent;
  let fixture: ComponentFixture<GetCoordinatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetCoordinatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetCoordinatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
