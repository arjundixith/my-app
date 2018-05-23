import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';
import {CounterService} from '../_services/counter.service'


@Component({
  selector: 'app-dashboard-div2',
  templateUrl: './dashboard-div2.component.html',
  styleUrls: ['./dashboard-div2.component.css']
})
export class DashboardDiv2Component implements OnInit {
   @Input() counter  : number;
   @Output() counterEmit : EventEmitter<number> = new EventEmitter<number>();
   
  constructor(private counters : CounterService) {
      
   }

  ngOnInit() {
  }

  increment() {
    this.counter = this.counters.increment(this.counter);
    this.counterEmit.emit(this.counter)
    
  }

  decrement() {
    this.counter = this.counters.decrement(this.counter);
    this.counterEmit.emit(this.counter)
  }

}
