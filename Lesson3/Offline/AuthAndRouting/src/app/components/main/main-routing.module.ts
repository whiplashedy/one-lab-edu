import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import {ProfileComponent} from "./profile/profile.component";
import {NewsComponent} from "./news/news.component";
import {AcademyComponent} from "./academy/academy.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'first-page'
  },
  {
    path: 'first-page',
    component: MainComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'news',
    component: NewsComponent
  },
  {
    path: 'academy',
    component: AcademyComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
