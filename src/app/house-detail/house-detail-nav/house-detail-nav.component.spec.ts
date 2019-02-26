import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseDetailNavComponent } from './house-detail-nav.component';

describe('HouseDetailNavComponent', () => {
  let component: HouseDetailNavComponent;
  let fixture: ComponentFixture<HouseDetailNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HouseDetailNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseDetailNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
