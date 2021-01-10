import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderBodyFooterLayoutComponent } from './header-body-footer-layout.component';

describe('HeaderBodyFooterLayoutComponent', () => {
  let component: HeaderBodyFooterLayoutComponent;
  let fixture: ComponentFixture<HeaderBodyFooterLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderBodyFooterLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderBodyFooterLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
