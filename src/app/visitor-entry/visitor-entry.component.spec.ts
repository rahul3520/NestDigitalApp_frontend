import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorEntryComponent } from './visitor-entry.component';

describe('VisitorEntryComponent', () => {
  let component: VisitorEntryComponent;
  let fixture: ComponentFixture<VisitorEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisitorEntryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisitorEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
