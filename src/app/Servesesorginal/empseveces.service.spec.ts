import { TestBed } from '@angular/core/testing';

import { EmpsevecesService } from './empseveces.service';

describe('EmpsevecesService', () => {
  let service: EmpsevecesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpsevecesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
