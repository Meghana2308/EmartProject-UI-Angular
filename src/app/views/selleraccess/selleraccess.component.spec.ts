import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelleraccessComponent } from './selleraccess.component';

describe('SelleraccessComponent', () => {
  let component: SelleraccessComponent;
  let fixture: ComponentFixture<SelleraccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelleraccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelleraccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
