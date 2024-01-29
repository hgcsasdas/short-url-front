import { TestBed } from '@angular/core/testing';

import { LinksServiceService } from './links-service.service';

describe('LinksServiceService', () => {
  let service: LinksServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LinksServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
