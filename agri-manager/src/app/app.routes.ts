import { Routes } from '@angular/router';
import { LoginComponent } from './domains/access-control/presentation/pages/login/login-page.component';
import { SignupComponent } from './domains/access-control/presentation/pages/signup/signup-page.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        title: 'Acesso',
        component: LoginComponent
    },
    {
        path: 'signup',
        title: 'Cadastro',
        component: SignupComponent
    }
];
