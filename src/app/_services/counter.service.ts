import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  counterService: number;
  private countSource = new BehaviorSubject<number>(-1);
  currentCount = this.countSource.asObservable();

  constructor() {

  }

  increment(inc) {
    inc++;
    this.countSource.next(inc)
    return inc;
  }

  decrement(dec) {
    if (dec > 0) {
      dec--;
      this.countSource.next(dec)
      return dec;
    } else { return 0; }

  }
}
