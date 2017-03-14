import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PecoDemandComponent } from './peco-demand.component';

describe('PecoDemandComponent', () => {
  let component: PecoDemandComponent;
  let fixture: ComponentFixture<PecoDemandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PecoDemandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PecoDemandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
