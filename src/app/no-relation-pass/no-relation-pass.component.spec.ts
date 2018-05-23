import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoRelationPassComponent } from './no-relation-pass.component';

describe('NoRelationPassComponent', () => {
  let component: NoRelationPassComponent;
  let fixture: ComponentFixture<NoRelationPassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoRelationPassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoRelationPassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
