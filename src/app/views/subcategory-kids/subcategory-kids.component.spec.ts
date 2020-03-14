import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcategoryKidsComponent } from './subcategory-kids.component';

describe('SubcategoryKidsComponent', () => {
  let component: SubcategoryKidsComponent;
  let fixture: ComponentFixture<SubcategoryKidsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubcategoryKidsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubcategoryKidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
