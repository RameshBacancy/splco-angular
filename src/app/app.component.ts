import { Component } from '@angular/core';
import { SpinnerService } from './service/spinner.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'svg-to-pdf';
  public loading = false;

  constructor(private spinnerService: SpinnerService) { }

  ngOnInit(): void {
    this.spinnerService.getSpinnerObs().subscribe(val => {
      this.loading = val;
    })
  }
}
