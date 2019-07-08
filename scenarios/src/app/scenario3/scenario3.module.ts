import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';

@NgModule({
  declarations: [Child1Component, Child2Component],
  imports: [
    CommonModule
  ],
  exports:[Child1Component]
})
export class Scenario3Module { }
