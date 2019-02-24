import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FootComComponent } from './foot-com.component';

describe('FootComComponent', () => {
  let component: FootComComponent;
  let fixture: ComponentFixture<FootComComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FootComComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FootComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
