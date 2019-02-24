import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiveNavComponent } from './five-nav.component';

describe('FiveNavComponent', () => {
  let component: FiveNavComponent;
  let fixture: ComponentFixture<FiveNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiveNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiveNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
