import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityGuardLoginbarComponent } from './security-guard-loginbar.component';

describe('SecurityGuardLoginbarComponent', () => {
  let component: SecurityGuardLoginbarComponent;
  let fixture: ComponentFixture<SecurityGuardLoginbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecurityGuardLoginbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecurityGuardLoginbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
