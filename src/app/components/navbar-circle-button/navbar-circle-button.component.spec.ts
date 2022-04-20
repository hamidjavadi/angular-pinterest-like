import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarCircleButtonComponent } from './navbar-circle-button.component';

describe('NavbarCircleButtonComponent', () => {
  let component: NavbarCircleButtonComponent;
  let fixture: ComponentFixture<NavbarCircleButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarCircleButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarCircleButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
