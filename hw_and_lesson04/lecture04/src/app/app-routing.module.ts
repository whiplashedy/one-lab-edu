import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Component1Component} from './component1/component1.component';

const routes: Routes = [

  { path: 'xd1', component: Component1Component, data: {title: 'xd1', search: 'searching1....'}, queryParams: { search: '' }},
  { path: 'xd2', component: Component1Component, data: {title: 'xd2', search: 'searching2....'}, queryParams: { search: '' }}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
