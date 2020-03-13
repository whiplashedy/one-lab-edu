import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {ReactiveFormsModule} from '@angular/forms';
import {AuthGuard} from './guards/auth.guard';
import { AuthComponent } from './auth.component';
import {AuthService} from '../core/services/auth/auth.service';
import {AuthRoutingModule} from './auth-routing.module';
import {AppPasswordDirective} from './directives/app-password.directive';
import { ForgetComponent } from './forget/forget.component';

@NgModule({
    declarations: [
        LoginComponent,
        RegisterComponent,
        AuthComponent,
        AppPasswordDirective,
        ForgetComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        AuthRoutingModule
    ],
    exports: [
        AppPasswordDirective
    ],
    providers: [
        AuthGuard,
        AuthService
    ]
})
export class AuthModule {}
