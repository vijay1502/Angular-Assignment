import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {
public message=[];
  constructor(private Tasker:TaskService) { }

  ngOnInit() {
   
  }
  getmess(){
    this.Tasker.message.next();  }

}
