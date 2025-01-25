import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';

export const routes: Routes = [
{
    path:'',
    redirectTo: 'student',
    pathMatch:'full'
},
{
    path:'student',
    component:StudentComponent
}

];
