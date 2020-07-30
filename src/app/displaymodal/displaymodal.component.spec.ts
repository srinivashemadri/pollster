import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaymodalComponent } from './displaymodal.component';

describe('DisplaymodalComponent', () => {
  let component: DisplaymodalComponent;
  let fixture: ComponentFixture<DisplaymodalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplaymodalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaymodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
