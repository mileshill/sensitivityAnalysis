import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PecoConsumptionComponent } from './peco-consumption.component';

describe('PecoConsumptionComponent', () => {
  let component: PecoConsumptionComponent;
  let fixture: ComponentFixture<PecoConsumptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PecoConsumptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PecoConsumptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
