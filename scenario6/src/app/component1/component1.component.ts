import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {
@Output() public child= new EventEmitter();
public myData="";
  constructor() { }

  ngOnInit() {
  }
event(){
  this.child.emit(this.myData);
}
}
