import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMyLeaveStatusComponent } from './view-my-leave-status.component';

describe('ViewMyLeaveStatusComponent', () => {
  let component: ViewMyLeaveStatusComponent;
  let fixture: ComponentFixture<ViewMyLeaveStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewMyLeaveStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewMyLeaveStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
