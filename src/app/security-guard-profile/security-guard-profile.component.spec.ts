import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityGuardProfileComponent } from './security-guard-profile.component';

describe('SecurityGuardProfileComponent', () => {
  let component: SecurityGuardProfileComponent;
  let fixture: ComponentFixture<SecurityGuardProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecurityGuardProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecurityGuardProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
