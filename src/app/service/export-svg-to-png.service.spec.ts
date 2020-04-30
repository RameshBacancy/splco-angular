import { TestBed } from '@angular/core/testing';

import { ExportSvgToPngService } from './export-svg-to-png.service';

describe('ExportSvgToPngService', () => {
  let service: ExportSvgToPngService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExportSvgToPngService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
