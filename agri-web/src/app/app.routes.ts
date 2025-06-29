import { Routes } from '@angular/router';
import { LoginComponent } from './domains/access-control/presentation/auth/pages/login/login.component';

export const routes: Routes = [
    {
        path: 'login',
        title: 'Acesso',
        component: LoginComponent
    },
    { 
        path: '', 
        redirectTo: 'login', 
        pathMatch: 'full' 
    },
];
