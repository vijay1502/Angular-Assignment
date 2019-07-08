import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tasker1Component } from './tasker1.component';

describe('Tasker1Component', () => {
  let component: Tasker1Component;
  let fixture: ComponentFixture<Tasker1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tasker1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tasker1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
