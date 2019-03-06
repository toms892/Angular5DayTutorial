import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalService2Component } from './local-service2.component';

describe('LocalService2Component', () => {
  let component: LocalService2Component;
  let fixture: ComponentFixture<LocalService2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalService2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalService2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
