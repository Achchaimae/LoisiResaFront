import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuideCalendarComponent } from './guide-calendar.component';

describe('GuideCalendarComponent', () => {
  let component: GuideCalendarComponent;
  let fixture: ComponentFixture<GuideCalendarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GuideCalendarComponent]
    });
    fixture = TestBed.createComponent(GuideCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
