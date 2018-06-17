import { TestBed, inject } from '@angular/core/testing';

import { ProductdemoService } from './productdemo.service';

describe('ProductdemoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductdemoService]
    });
  });

  it('should be created', inject([ProductdemoService], (service: ProductdemoService) => {
    expect(service).toBeTruthy();
  }));
});
