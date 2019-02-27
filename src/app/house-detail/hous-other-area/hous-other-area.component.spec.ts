import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HousOtherAreaComponent } from './hous-other-area.component';

describe('HousOtherAreaComponent', () => {
  let component: HousOtherAreaComponent;
  let fixture: ComponentFixture<HousOtherAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HousOtherAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HousOtherAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
