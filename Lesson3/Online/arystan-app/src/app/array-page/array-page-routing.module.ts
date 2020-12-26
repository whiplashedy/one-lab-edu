import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ArrayPageComponentComponent} from "./array-page-component/array-page-component.component";

const routes: Routes = [
  {
    path: '',
    component: ArrayPageComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArrayPageRoutingModule { }
