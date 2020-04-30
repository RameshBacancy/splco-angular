import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExportSvgComponent } from './export-svg/export-svg.component';


@NgModule({
  declarations: [ExportSvgComponent],
  imports: [
    CommonModule
  ],
  exports: [ExportSvgComponent]
})
export class CoreModule { }
