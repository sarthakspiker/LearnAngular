import { TestBed } from '@angular/core/testing';

import { ParseEmployeesJsonService } from './parse-employees-json.service';

describe('ParseEmployeesJsonService', () => {
  let service: ParseEmployeesJsonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParseEmployeesJsonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
