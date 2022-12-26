import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllVisitorLogsComponent } from './view-all-visitor-logs.component';

describe('ViewAllVisitorLogsComponent', () => {
  let component: ViewAllVisitorLogsComponent;
  let fixture: ComponentFixture<ViewAllVisitorLogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllVisitorLogsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAllVisitorLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
