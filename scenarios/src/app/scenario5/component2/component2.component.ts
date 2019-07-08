import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';


@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {
  @Output() public parent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  get(event){
    this.parent.emit(event);
  }
}
