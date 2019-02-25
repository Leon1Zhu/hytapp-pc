import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseTitleComponent } from './house-title.component';

describe('HouseTitleComponent', () => {
  let component: HouseTitleComponent;
  let fixture: ComponentFixture<HouseTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HouseTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
