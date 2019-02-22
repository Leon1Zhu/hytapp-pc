import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondNavItemComponent } from './second-nav-item.component';

describe('SecondNavItemComponent', () => {
  let component: SecondNavItemComponent;
  let fixture: ComponentFixture<SecondNavItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondNavItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondNavItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
