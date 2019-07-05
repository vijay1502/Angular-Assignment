import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {
message:any;
  constructor(private Tasker:TaskService) { }

  ngOnInit() {
    this.Tasker.message.subscribe(data=>{ this.message=data;
  });}

}
