import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tasker2Component } from './tasker2.component';

describe('Tasker2Component', () => {
  let component: Tasker2Component;
  let fixture: ComponentFixture<Tasker2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tasker2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tasker2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
