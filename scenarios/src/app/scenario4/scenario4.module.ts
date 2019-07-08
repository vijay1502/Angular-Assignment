import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tasker1Component } from './tasker1/tasker1.component';
import { Tasker2Component } from './tasker2/tasker2.component';

@NgModule({
  declarations: [Tasker1Component, Tasker2Component],
  imports: [
    CommonModule
  ],
  exports:[Tasker2Component]
})
export class Scenario4Module { }
