import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewVisitorLogsByDateComponent } from './view-visitor-logs-by-date.component';

describe('ViewVisitorLogsByDateComponent', () => {
  let component: ViewVisitorLogsByDateComponent;
  let fixture: ComponentFixture<ViewVisitorLogsByDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewVisitorLogsByDateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewVisitorLogsByDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
