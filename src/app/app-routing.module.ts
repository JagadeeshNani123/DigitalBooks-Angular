import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './components/book/book.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { StartupComponent } from './components/startup/startup.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  {path:"/user", component: UserComponent},
  {path:"/book", component: BookComponent},
  {path:"/login", component: LoginComponent},
  {path:"/signup", component: SignupComponent},
  {path:"/dashboard", component: DashboardComponent},
  {path:"/startup", component: StartupComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[UserComponent, BookComponent, LoginComponent, SignupComponent, DashboardComponent, StartupComponent]
