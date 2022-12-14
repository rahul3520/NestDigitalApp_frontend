import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeRegistrationPageComponent } from './employee-registration-page.component';

describe('EmployeeRegistrationPageComponent', () => {
  let component: EmployeeRegistrationPageComponent;
  let fixture: ComponentFixture<EmployeeRegistrationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeRegistrationPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeRegistrationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
