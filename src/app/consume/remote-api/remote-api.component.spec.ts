import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoteApiComponent } from './remote-api.component';

describe('RemoteApiComponent', () => {
  let component: RemoteApiComponent;
  let fixture: ComponentFixture<RemoteApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoteApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoteApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
