import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseTypeComComponent } from './house-type-com.component';

describe('HouseTypeComComponent', () => {
  let component: HouseTypeComComponent;
  let fixture: ComponentFixture<HouseTypeComComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HouseTypeComComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseTypeComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
