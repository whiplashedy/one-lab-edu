import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FormpageComponent} from "./formpage/formpage.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'page1'
  },
  {
    path: 'page1',
    component: FormpageComponent,
    data: { title: 'page1' }
  },
  {
    path: 'page2',
    component: FormpageComponent,
    data: { title: 'page2' }
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
