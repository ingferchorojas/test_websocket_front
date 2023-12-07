import { Routes } from '@angular/router';
import { TestFormComponent } from './pages/test-form/test-form.component';

export const routes: Routes = [
    {
        path: '',
        component: TestFormComponent,
        pathMatch: 'full'
    }
];
