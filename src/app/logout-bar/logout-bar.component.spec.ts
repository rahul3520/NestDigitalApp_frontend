import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoutBarComponent } from './logout-bar.component';

describe('LogoutBarComponent', () => {
  let component: LogoutBarComponent;
  let fixture: ComponentFixture<LogoutBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoutBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogoutBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
