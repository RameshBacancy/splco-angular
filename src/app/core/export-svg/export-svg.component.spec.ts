import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportSvgComponent } from './export-svg.component';

describe('ExportSvgComponent', () => {
  let component: ExportSvgComponent;
  let fixture: ComponentFixture<ExportSvgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExportSvgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
