import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityGuardLoginPageComponent } from './security-guard-login-page.component';

describe('SecurityGuardLoginPageComponent', () => {
  let component: SecurityGuardLoginPageComponent;
  let fixture: ComponentFixture<SecurityGuardLoginPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecurityGuardLoginPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecurityGuardLoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
