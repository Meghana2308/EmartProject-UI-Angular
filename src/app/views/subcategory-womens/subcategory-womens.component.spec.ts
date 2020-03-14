import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcategoryWomensComponent } from './subcategory-womens.component';

describe('SubcategoryWomensComponent', () => {
  let component: SubcategoryWomensComponent;
  let fixture: ComponentFixture<SubcategoryWomensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubcategoryWomensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubcategoryWomensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
