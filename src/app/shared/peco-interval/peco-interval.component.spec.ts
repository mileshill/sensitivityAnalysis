import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PecoIntervalComponent } from './peco-interval.component';

describe('PecoIntervalComponent', () => {
  let component: PecoIntervalComponent;
  let fixture: ComponentFixture<PecoIntervalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PecoIntervalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PecoIntervalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
