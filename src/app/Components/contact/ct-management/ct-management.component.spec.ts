import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtManagementComponent } from './ct-management.component';

describe('CtManagementComponent', () => {
  let component: CtManagementComponent;
  let fixture: ComponentFixture<CtManagementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CtManagementComponent]
    });
    fixture = TestBed.createComponent(CtManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
