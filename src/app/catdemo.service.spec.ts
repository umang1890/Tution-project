import { TestBed, inject } from '@angular/core/testing';

import { CatdemoService } from './catdemo.service';

describe('CatdemoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CatdemoService]
    });
  });

  it('should be created', inject([CatdemoService], (service: CatdemoService) => {
    expect(service).toBeTruthy();
  }));
});
