import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseTitleItemComponent } from './house-title-item.component';

describe('HouseTitleItemComponent', () => {
  let component: HouseTitleItemComponent;
  let fixture: ComponentFixture<HouseTitleItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HouseTitleItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseTitleItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
