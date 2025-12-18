import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './layouts/auth/login/login.component';
import { RegisterComponent } from './layouts/auth/register/register.component';
import { ProjectDashboardComponent } from './layouts/project-dashboard/project-dashboard.component';
import { TaskDashboardComponent } from './layouts/task-dashboard/task-dashboard.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { AppLayoutComponent } from './layouts/app-layout/app-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProjectDashboardComponent,
    TaskDashboardComponent,
    NavbarComponent,
    AppLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
