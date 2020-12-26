import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArrayPageComponentComponent } from './array-page-component/array-page-component.component';
import { ArrayPageRoutingModule } from "./array-page-routing.module";

@NgModule({
  declarations: [ArrayPageComponentComponent],
  imports: [
    CommonModule,
    ArrayPageRoutingModule
  ]
})
export class ArrayPageModule { }
