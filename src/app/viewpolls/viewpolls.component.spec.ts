import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewpollsComponent } from './viewpolls.component';

describe('ViewpollsComponent', () => {
  let component: ViewpollsComponent;
  let fixture: ComponentFixture<ViewpollsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewpollsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewpollsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
