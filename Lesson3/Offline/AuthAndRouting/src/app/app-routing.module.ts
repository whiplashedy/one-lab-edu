import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NotFoundPageComponent} from "./static/notfound-page/notfound-page.component";
import {AngularFireAuthGuard, redirectLoggedInTo, redirectUnauthorizedTo} from '@angular/fire/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['auth']);
const redirectLoggedInToMain = () => redirectLoggedInTo(['main']);

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'auth'
  },
  {
    path: 'main',
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
    loadChildren: () => import('./components/main/main-routing.module').then(m => m.MainRoutingModule)
  },
  {
    path: 'auth',
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectLoggedInToMain },
    loadChildren: () => import('./components/auth/auth-routing.module').then(m => m.AuthRoutingModule)
  },
  {
    path: '404',
    pathMatch: 'full',
    redirectTo: ''
  },
  // {path: '404', component: NotFoundPageComponent},
  {path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
