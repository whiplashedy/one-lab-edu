import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { SharedModule } from '@shared/shared.module';
import { PhotosListComponent } from './pages/photos-list/photos-list.component';
import { UsersListComponent } from './pages/users-list/users-list.component';

@NgModule({
  declarations: [
    UsersListComponent,
    PhotosListComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule
  ]
})
export class MainModule {
  constructor() {
    console.log('MainModule is loaded');
  }
}
