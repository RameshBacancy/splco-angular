import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgToPngComponent } from './svg-to-png.component';

describe('SvgToPngComponent', () => {
  let component: SvgToPngComponent;
  let fixture: ComponentFixture<SvgToPngComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SvgToPngComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SvgToPngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
