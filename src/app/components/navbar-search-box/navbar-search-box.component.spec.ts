import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarSearchBoxComponent } from './navbar-search-box.component';

describe('NavbarSearchBoxComponent', () => {
  let component: NavbarSearchBoxComponent;
  let fixture: ComponentFixture<NavbarSearchBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarSearchBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarSearchBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
