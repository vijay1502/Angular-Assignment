import { Component, OnInit, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-tasker1',
  templateUrl: './tasker1.component.html',
  styleUrls: ['./tasker1.component.css']
})
export class Tasker1Component implements OnInit {
  @Output() public child = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  eventer(){
    this.child.emit('Vijay');
  }
}
