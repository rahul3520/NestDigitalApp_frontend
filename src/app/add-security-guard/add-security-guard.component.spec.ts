import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSecurityGuardComponent } from './add-security-guard.component';

describe('AddSecurityGuardComponent', () => {
  let component: AddSecurityGuardComponent;
  let fixture: ComponentFixture<AddSecurityGuardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSecurityGuardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddSecurityGuardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
