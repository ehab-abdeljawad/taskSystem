import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskDetailsComponent } from './Components/task-details/task-details.component';
import { TaskListComponent } from './Components/task-list/task-list.component';
import { TaskFormComponent } from './Components/task-form/task-form.component';
import { LoginComponent } from './Components/login/login.component';
import { AuthGuard } from './auth/authguard.guard';
import { RegisterComponent } from './Components/register/register.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:"tasklist",component:TaskListComponent,canActivate:[AuthGuard]},
  {path:"tasklist/details/:id",component:TaskDetailsComponent,canActivate:[AuthGuard]},
  {path:"addTask",component:TaskFormComponent,canActivate:[AuthGuard]},
  {path:"tasklist/details/:id/addTask/:id",component:TaskFormComponent,canActivate:[AuthGuard]},
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
