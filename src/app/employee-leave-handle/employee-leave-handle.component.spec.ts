import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeLeaveHandleComponent } from './employee-leave-handle.component';

describe('EmployeeLeaveHandleComponent', () => {
  let component: EmployeeLeaveHandleComponent;
  let fixture: ComponentFixture<EmployeeLeaveHandleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeLeaveHandleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeLeaveHandleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
