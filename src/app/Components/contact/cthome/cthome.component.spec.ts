import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CThomeComponent } from './cthome.component';

describe('CThomeComponent', () => {
  let component: CThomeComponent;
  let fixture: ComponentFixture<CThomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CThomeComponent]
    });
    fixture = TestBed.createComponent(CThomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
