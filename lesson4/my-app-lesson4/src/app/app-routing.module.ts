import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import {NewComponent} from './new/new.component';

const routes: Routes = [

  {
    path: '',
    children: [
      {path: '',component: NewComponent,data:{title:'Empty'}},
      {path: 'new1',component: NewComponent,data:{title:'NEW'}},
      {path: 'new2',component: NewComponent,data:{title:'NEW2'}},
    ],


  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
