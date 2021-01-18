import { TestBed } from '@angular/core/testing';

import { AvalStylesService } from './aval-styles.service';

describe('AvalStylesService', () => {
  let service: AvalStylesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AvalStylesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
