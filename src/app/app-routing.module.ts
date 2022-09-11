import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './components/book/book.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  {path:"user", component: UserComponent},
  {path:"book", component: BookComponent},
  {path:"login", component: LoginComponent},
  {path:"signup", component: SignupComponent},
  {path:"dashboard", component: DashboardComponent},
  {path:'', redirectTo:"/book", pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[UserComponent, BookComponent, LoginComponent, SignupComponent, DashboardComponent, HeaderComponent, FooterComponent]
