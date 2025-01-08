import { Routes } from '@angular/router';
import { LayoutComponent } from './Pages/layout/layout.component';
import { UserListComponent } from './Pages/user-list/user-list.component';
import { LoginComponent } from './Pages/login/login.component';
import { CreateUserComponent } from './Pages/create-user/create-user.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo: 'login',
        pathMatch: 'full'
    
    },

    {
        path :'login',
        component: LoginComponent
    },
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: 'user-list',
                component: UserListComponent

             },
            {
                path: 'create-user',
                component: CreateUserComponent

            }

    ]
    }
];
