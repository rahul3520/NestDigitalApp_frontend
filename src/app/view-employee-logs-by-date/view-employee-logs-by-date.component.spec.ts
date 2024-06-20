import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEmployeeLogsByDateComponent } from './view-employee-logs-by-date.component';

describe('ViewEmployeeLogsByDateComponent', () => {
  let component: ViewEmployeeLogsByDateComponent;
  let fixture: ComponentFixture<ViewEmployeeLogsByDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewEmployeeLogsByDateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewEmployeeLogsByDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
