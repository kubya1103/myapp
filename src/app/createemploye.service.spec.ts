import { TestBed } from '@angular/core/testing';

import { CreateemployeService } from './createemploye.service';

describe('CreateemployeService', () => {
  let service: CreateemployeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateemployeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
