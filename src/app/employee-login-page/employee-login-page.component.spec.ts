import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeLoginPageComponent } from './employee-login-page.component';

describe('EmployeeLoginPageComponent', () => {
  let component: EmployeeLoginPageComponent;
  let fixture: ComponentFixture<EmployeeLoginPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeLoginPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeLoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
