import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import{ HomeComponent } from'./home/home.component';
import {MainComponentComponent} from './main-component/main-component.component'
import { resolve } from 'q';
const routes: Routes = [
  { path: 'home', component: MainComponentComponent, children:[
    { path: '', component: HomeComponent },
    { path: 'dashboard/:id', component: DashboardComponent },
  ] },
  
  { path: 'login', component: LoginComponent },
  { path: '**', component: LoginComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
