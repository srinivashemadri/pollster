import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedpollComponent } from './detailedpoll.component';

describe('DetailedpollComponent', () => {
  let component: DetailedpollComponent;
  let fixture: ComponentFixture<DetailedpollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailedpollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailedpollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
