import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{LoginComponent} from "./auth/login/login.component";
import {AuthGaurdService} from "./shared/common/auth-gaurd.service";

function AuthGuardService() {

}

const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'/login'},
  {path:'login',component:LoginComponent},
  {
    path:'dashboard',
    //lazy loading feature which gives us a promise.
    loadChildren: () => import("./dashboard/dashboard.module").then(m=>m.DashboardModule),
    canActivate:[AuthGaurdService]
  },
  {
    path: 'reports', loadChildren: () => import("./report/report.module").then(m => m.ReportModule),
    canActivate: [AuthGuardService]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
