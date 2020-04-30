import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgToPngDemoComponent } from './svg-to-png-demo.component';

describe('SvgToPngDemoComponent', () => {
  let component: SvgToPngDemoComponent;
  let fixture: ComponentFixture<SvgToPngDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SvgToPngDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SvgToPngDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
