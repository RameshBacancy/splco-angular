import { Component, OnInit, Input } from '@angular/core';
import { ExportSvgToPngService } from 'src/app/service/export-svg-to-png.service';

@Component({
  selector: 'app-export-svg',
  templateUrl: './export-svg.component.html',
  styleUrls: ['./export-svg.component.css']
})
export class ExportSvgComponent implements OnInit {
  @Input() dataId;
  constructor(public exportSvgToPngService: ExportSvgToPngService) { }

  ngOnInit(): void { }


  export(id) {
    var svgString = document.getElementById(id).innerHTML;
    this.exportSvgToPngService.export(svgString);
  }
}
