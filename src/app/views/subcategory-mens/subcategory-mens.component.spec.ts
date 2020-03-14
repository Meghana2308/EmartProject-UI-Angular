import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcategoryMensComponent } from './subcategory-mens.component';

describe('SubcategoryMensComponent', () => {
  let component: SubcategoryMensComponent;
  let fixture: ComponentFixture<SubcategoryMensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubcategoryMensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubcategoryMensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
