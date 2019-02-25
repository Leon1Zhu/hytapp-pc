import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseRightInfoComponent } from './house-right-info.component';

describe('HouseRightInfoComponent', () => {
  let component: HouseRightInfoComponent;
  let fixture: ComponentFixture<HouseRightInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HouseRightInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseRightInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
