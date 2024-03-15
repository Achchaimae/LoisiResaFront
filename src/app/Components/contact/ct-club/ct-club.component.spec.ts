import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtClubComponent } from './ct-club.component';

describe('CtClubComponent', () => {
  let component: CtClubComponent;
  let fixture: ComponentFixture<CtClubComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CtClubComponent]
    });
    fixture = TestBed.createComponent(CtClubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
