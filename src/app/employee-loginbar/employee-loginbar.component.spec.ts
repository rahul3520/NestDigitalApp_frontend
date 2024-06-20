import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeLoginbarComponent } from './employee-loginbar.component';

describe('EmployeeLoginbarComponent', () => {
  let component: EmployeeLoginbarComponent;
  let fixture: ComponentFixture<EmployeeLoginbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeLoginbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeLoginbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
