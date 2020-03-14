import { TestBed } from '@angular/core/testing';

import { Products1Service } from './products1.service';

describe('Products1Service', () => {
  let service: Products1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Products1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
