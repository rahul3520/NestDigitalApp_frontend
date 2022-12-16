import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllEmployeeLogsComponent } from './view-all-employee-logs.component';

describe('ViewAllEmployeeLogsComponent', () => {
  let component: ViewAllEmployeeLogsComponent;
  let fixture: ComponentFixture<ViewAllEmployeeLogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllEmployeeLogsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAllEmployeeLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
