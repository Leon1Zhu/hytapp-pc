import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeCarComponent } from './free-car.component';

describe('FreeCarComponent', () => {
  let component: FreeCarComponent;
  let fixture: ComponentFixture<FreeCarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreeCarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreeCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
