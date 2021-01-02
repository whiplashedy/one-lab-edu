import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegistrationFormComponent} from './registration-form/registration-form.component';

const routes: Routes = [
  {
    path: 'register',
    component: RegistrationFormComponent
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'register'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
