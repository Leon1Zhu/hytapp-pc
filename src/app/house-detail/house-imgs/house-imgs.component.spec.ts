import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseImgsComponent } from './house-imgs.component';

describe('HouseImgsComponent', () => {
  let component: HouseImgsComponent;
  let fixture: ComponentFixture<HouseImgsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HouseImgsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseImgsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
