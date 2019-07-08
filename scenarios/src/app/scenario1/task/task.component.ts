import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  public value = "";
  constructor() { }

  ngOnInit() {
  }
  onclick(value) {
    console.log(value);
    }
}
