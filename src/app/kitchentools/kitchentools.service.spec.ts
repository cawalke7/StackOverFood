import { TestBed } from '@angular/core/testing';

import { KitchentoolsService } from './kitchentools.service';

describe('KitchentoolsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KitchentoolsService = TestBed.get(KitchentoolsService);
    expect(service).toBeTruthy();
  });
});
