import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedpackageTagComponent } from './redpackage-tag.component';

describe('RedpackageTagComponent', () => {
  let component: RedpackageTagComponent;
  let fixture: ComponentFixture<RedpackageTagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedpackageTagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedpackageTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
