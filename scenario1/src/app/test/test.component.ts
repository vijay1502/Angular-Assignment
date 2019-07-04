import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

public greeting="";
  constructor() { }
  onclick() {
    var k=5;
    if(k>10){
    console.log('You are wrong');}
    else{
      console.log('nothing');
      }
    }

    onclir(){
      console.log('Done with the day');
      this.greeting="nothing";
    }

  ngOnInit() {
  }

}


