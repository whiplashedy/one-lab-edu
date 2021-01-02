import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoveableBlockComponent } from './moveable-block.component';

describe('MoveableBlockComponent', () => {
  let component: MoveableBlockComponent;
  let fixture: ComponentFixture<MoveableBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoveableBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoveableBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
