import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardDiv2Component } from './dashboard-div2.component';

describe('DashboardDiv2Component', () => {
  let component: DashboardDiv2Component;
  let fixture: ComponentFixture<DashboardDiv2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardDiv2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardDiv2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
