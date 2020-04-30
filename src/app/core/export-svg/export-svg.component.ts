import { Component, OnInit } from '@angular/core';
import { ExportSvgToPngService } from 'src/app/service/export-svg-to-png.service';

@Component({
  selector: 'app-export-svg',
  templateUrl: './export-svg.component.html',
  styleUrls: ['./export-svg.component.css']
})
export class ExportSvgComponent implements OnInit {

  constructor(public exportSvgToPngService: ExportSvgToPngService) { }

  ngOnInit(): void { }

  export() {
    var svgString = document.getElementById('export-SVG').innerHTML;
    this.exportSvgToPngService.export(svgString);
  }
}
