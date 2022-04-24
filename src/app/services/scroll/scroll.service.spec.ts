import { TestBed } from '@angular/core/testing';

import { ScrollDirectionService } from './scroll.service';

describe('ScrollDirectionService', () => {
  let service: ScrollDirectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScrollDirectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
