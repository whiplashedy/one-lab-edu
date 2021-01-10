import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersListComponent } from './pages/users-list/users-list.component';
import { PhotosListComponent } from './pages/photos-list/photos-list.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'list/photos'
  },
  {
    path: 'list',
    pathMatch: 'full',
    redirectTo: 'list/photos'
  },
  {
    path: 'list',
    children: [
      {
        path: 'users',
        component: UsersListComponent
      },
      {
        path: 'photos',
        component: PhotosListComponent
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'list/users'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {
  constructor() {}
}
