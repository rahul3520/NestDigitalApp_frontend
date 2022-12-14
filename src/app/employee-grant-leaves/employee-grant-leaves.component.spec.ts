import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeGrantLeavesComponent } from './employee-grant-leaves.component';

describe('EmployeeGrantLeavesComponent', () => {
  let component: EmployeeGrantLeavesComponent;
  let fixture: ComponentFixture<EmployeeGrantLeavesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeGrantLeavesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeGrantLeavesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
