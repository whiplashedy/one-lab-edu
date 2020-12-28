import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main/main.component';
import {ReactiveFormsModule} from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { NewsComponent } from './news/news.component';
import { AcademyComponent } from './academy/academy.component';

@NgModule({
  declarations: [
    MainComponent,
    ProfileComponent,
    NewsComponent,
    AcademyComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    ReactiveFormsModule
  ]
})
export class MainModule { }
