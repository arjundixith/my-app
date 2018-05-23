import { Component, OnInit, Input,OnChanges } from '@angular/core';
import { CounterService } from '../_services/counter.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnChanges,OnInit{
  counter: number;
  constructor(private counters: CounterService) {

  }

  ngOnInit() {
    
    this.counters.currentCount.subscribe(counter => this.counter = counter)
    if(this.counter<=0){
      this.counter = this.counters.increment(-1);
    }
 
  }

  ngOnChanges(){
    
  }

  incDec(val){
    this.counter = val;
  }
  increment() {
    this.counter = this.counters.increment(this.counter);
    this.counters.currentCount.subscribe(counter => this.counter = counter)
  }

  decrement() {
    this.counter = this.counters.decrement(this.counter);
    this.counters.currentCount.subscribe(counter => this.counter = counter)
  }

}
