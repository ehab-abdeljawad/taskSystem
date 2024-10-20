import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { TaskListComponent } from './Components/task-list/task-list.component';
import { TaskDetailsComponent } from './Components/task-details/task-details.component';
import { TaskFormComponent } from './Components/task-form/task-form.component';
import { LoginComponent } from './Components/login/login.component';
import { AuthInterceptorService } from './Services/auth-interceptor.service';
import { RegisterComponent } from './Components/register/register.component';
import { MustMatchDirective } from './Directives/must-match.directive';
 



@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    TaskListComponent,
    TaskDetailsComponent,
    TaskFormComponent,
    LoginComponent,
    RegisterComponent,
    MustMatchDirective,
    MustMatchDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService ,
      multi: true 
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
