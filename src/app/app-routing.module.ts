import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

// @NgModule({
//   imports: [
//     CommonModule
//   ],
//   declarations: []
// })
const routes: Routes = [
  { path: '**', component: LoginComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
