import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TqpaymentComponent } from './tqpayment.component';

describe('TqpaymentComponent', () => {
  let component: TqpaymentComponent;
  let fixture: ComponentFixture<TqpaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TqpaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TqpaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
