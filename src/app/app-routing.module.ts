import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { CreateemployeComponent } from './createemploye/createemploye.component';
import { AllemployesComponent } from './allemployes/allemployes.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent, children:[
    {path:'home',component:HomeComponent},
    {path:'createemploye',component:CreateemployeComponent},
    {path:'allemployes',component:AllemployesComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
