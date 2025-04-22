import { TestBed } from '@angular/core/testing';

import { StudentAuthGuard } from './studentauth.guard';

describe('StudentauthGuard', () => {
  let guard: StudentAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(StudentAuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
