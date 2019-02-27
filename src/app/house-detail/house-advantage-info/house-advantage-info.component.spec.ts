import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseAdvantageInfoComponent } from './house-advantage-info.component';

describe('HouseAdvantageInfoComponent', () => {
  let component: HouseAdvantageInfoComponent;
  let fixture: ComponentFixture<HouseAdvantageInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HouseAdvantageInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseAdvantageInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
