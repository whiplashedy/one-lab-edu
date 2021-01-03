import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';


const routes: Routes = [
  {
    path:'page1', component:Page1Component, data: {title: "Page 1"},
  },
  {
    path:'page2', component:Page2Component, data: {title: "Page 2"}
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
