import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-compo1',
  templateUrl: './compo1.component.html',
  styleUrls: ['./compo1.component.css']
})
export class Compo1Component implements OnInit {
  @Output() public child = new EventEmitter();
  public myData = ' ';
  constructor() { }

  ngOnInit() {
  }
  event(myData){
    this.child.emit(this.myData);
  }
}
