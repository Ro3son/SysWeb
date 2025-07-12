import { Routes } from '@angular/router';
import { LoginComponent } from './domains/access-control/presentation/pages/login/login-page.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    }
];
