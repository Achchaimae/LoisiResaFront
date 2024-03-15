import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GHomeComponent } from './ghome.component';

describe('GHomeComponent', () => {
  let component: GHomeComponent;
  let fixture: ComponentFixture<GHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GHomeComponent]
    });
    fixture = TestBed.createComponent(GHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
