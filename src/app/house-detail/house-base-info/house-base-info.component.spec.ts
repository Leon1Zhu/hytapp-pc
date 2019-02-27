import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseBaseInfoComponent } from './house-base-info.component';

describe('HouseBaseInfoComponent', () => {
  let component: HouseBaseInfoComponent;
  let fixture: ComponentFixture<HouseBaseInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HouseBaseInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseBaseInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
