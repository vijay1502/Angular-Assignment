import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test/test.component';
import {FormsModule} from '@angular/forms';
@NgModule({
  declarations: [TestComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[ TestComponent ],
})
export class Scenario2Module { }
