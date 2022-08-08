import { TestBed } from '@angular/core/testing';

import { SerieIdService } from './serie-id.service';

describe('SerieIdService', () => {
  let service: SerieIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SerieIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
