import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PplIntervalComponent } from './ppl-interval.component';

describe('PplIntervalComponent', () => {
  let component: PplIntervalComponent;
  let fixture: ComponentFixture<PplIntervalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PplIntervalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PplIntervalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
