import { Routes } from '@angular/router';
import { EmployeeComponent } from './pages/employee/employee.component';
import { ManageEmployeeComponent } from './pages/manage-employee/manage-employee.component';

export const routes: Routes = [
    {
        path: 'employees',
        component: EmployeeComponent,
    },
    {
        path: 'manage-employee',
        component: ManageEmployeeComponent,
    },
    {
        path: 'manage-employee/:id',
        component: ManageEmployeeComponent,
    },
    {
        path: '',
        redirectTo: '/employees',
        pathMatch: 'full',
    },
];