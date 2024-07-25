import { TestBed } from '@angular/core/testing';

import { FormoneService } from './formone.service';

describe('FormoneService', () => {
  let service: FormoneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormoneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
