import { TestBed } from '@angular/core/testing';

import { TaskprocessService } from './taskprocess.service';

describe('TaskprocessService', () => {
  let service: TaskprocessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskprocessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
