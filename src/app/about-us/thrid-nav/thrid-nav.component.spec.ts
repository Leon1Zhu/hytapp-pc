import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThridNavComponent } from './thrid-nav.component';

describe('ThridNavComponent', () => {
  let component: ThridNavComponent;
  let fixture: ComponentFixture<ThridNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThridNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThridNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
