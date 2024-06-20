import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMyLeavesComponent } from './view-my-leaves.component';

describe('ViewMyLeavesComponent', () => {
  let component: ViewMyLeavesComponent;
  let fixture: ComponentFixture<ViewMyLeavesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewMyLeavesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewMyLeavesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
