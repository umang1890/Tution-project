import { TestBed, inject } from '@angular/core/testing';

import { TododemoService } from './tododemo.service';

describe('TododemoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TododemoService]
    });
  });

  it('should be created', inject([TododemoService], (service: TododemoService) => {
    expect(service).toBeTruthy();
  }));
});
