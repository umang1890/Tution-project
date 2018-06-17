import { TestBed, inject } from '@angular/core/testing';

import { StudentdemoService } from './studentdemo.service';

describe('StudentdemoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StudentdemoService]
    });
  });

  it('should be created', inject([StudentdemoService], (service: StudentdemoService) => {
    expect(service).toBeTruthy();
  }));
});
