import { Component, OnInit } from '@angular/core';
import {CounterService} from '../_services/counter.service'

@Component({
  selector: 'app-no-relation-pass',
  templateUrl: './no-relation-pass.component.html',
  styleUrls: ['./no-relation-pass.component.css']
})
export class NoRelationPassComponent implements OnInit {
   counter : number
  constructor(private counters: CounterService) { }

  ngOnInit() {
    this.counters.currentCount.subscribe(counter => this.counter = counter)
  }

}
