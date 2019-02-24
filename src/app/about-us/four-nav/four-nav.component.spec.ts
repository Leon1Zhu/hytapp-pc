import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FourNavComponent } from './four-nav.component';

describe('FourNavComponent', () => {
  let component: FourNavComponent;
  let fixture: ComponentFixture<FourNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FourNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FourNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
