import { TestBed } from '@angular/core/testing';

import { UsuarioServiceTsService } from './usuario.service.ts.service';

describe('UsuarioServiceTsService', () => {
  let service: UsuarioServiceTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsuarioServiceTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
