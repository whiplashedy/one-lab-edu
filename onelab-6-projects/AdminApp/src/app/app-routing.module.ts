import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MainpageComponent } from './mainpage/mainpage.component';

const routes: Routes = [

  {
    path: '',
    component: AppComponent,
    children:
    [ 
      {
        path:'login',
        loadChildren: () => import( './auth/auth.module').then((module)=>module.AuthModule)
      
      
    },

    {
      path:'mainpage',
      component:MainpageComponent
    }
    
    
    ]
    
    
    
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
