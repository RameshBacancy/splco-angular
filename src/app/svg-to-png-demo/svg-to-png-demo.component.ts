import { Component, OnInit } from '@angular/core';
declare var saveAs: any;


@Component({
  selector: 'app-svg-to-png-demo',
  templateUrl: './svg-to-png-demo.component.html',
  styleUrls: ['./svg-to-png-demo.component.css']
})
export class SvgToPngDemoComponent implements OnInit {
  id = 'svg-to-png-demo';

  constructor() { }

  ngOnInit(): void { }

  download() {
    console.log('inside the download method');
    var width, height;

    var svgString = document.getElementById('svg-container').innerHTML;
    let svgTag = (svgString.match(/<svg .*?>/g) || []);
    console.log('inside the download method');
    if (svgTag) {
      width = (svgTag[0].match(/width=".*?"/g) || []);
      if (width && width[0]) {
        width = Number(width[0].substring(7, 10));
      } else {
        width = 300;
      }
      height = (svgTag[0].match(/height=".*?"/g) || []);
      if (height && height[0]) {
        height = Number(height[0].substring(8, 11));
      } else {
        height = 300;
      }
    }
    console.log('inside the download method');
    this.svgString2Image(svgString, 2 * width, 2 * height, 'png', save);

    console.log('Before SAVE:::;');
    function save(dataBlob, filesize) {
      console.log('SAVE', dataBlob);
      saveAs(dataBlob, 'D3 vis exported to PNG.png');
    }
  }

  svgString2Image(svgString, width, height, format, callback) {
    var format = format ? format : 'png';
    console.log('format');

    var imgsrc = 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(svgString))); // Convert SVG string to data URL
    console.log('Imgsrc', imgsrc);

    var canvas = document.createElement("canvas");
    var context = canvas.getContext("2d");

    canvas.width = width;
    canvas.height = height;

    var image = new Image();
    image.onload = function () {
      context.clearRect(0, 0, width, height);
      context.drawImage(image, 0, 0, width, height);

      canvas.toBlob(function (blob) {
        var filesize = Math.round(blob['length'] / 1024) + ' KB';
        if (callback) callback(blob, filesize);
      });
    };
    image.src = imgsrc;
  }

}
