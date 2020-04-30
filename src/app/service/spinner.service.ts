import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
  public spinnerOpenSubj = new BehaviorSubject<boolean>(false);

  constructor() { }

  public getSpinnerObs(): Observable<boolean> {
    return this.spinnerOpenSubj.asObservable();
  }

  public openSpinner() {
    this.spinnerOpenSubj.next(true);
  }

  public closeSpinner() {
    this.spinnerOpenSubj.next(false);
  }

}
