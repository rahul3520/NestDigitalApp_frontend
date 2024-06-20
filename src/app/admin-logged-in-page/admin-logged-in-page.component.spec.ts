import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLoggedInPageComponent } from './admin-logged-in-page.component';

describe('AdminLoggedInPageComponent', () => {
  let component: AdminLoggedInPageComponent;
  let fixture: ComponentFixture<AdminLoggedInPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminLoggedInPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminLoggedInPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
