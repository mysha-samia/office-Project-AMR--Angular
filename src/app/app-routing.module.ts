import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./auth/login/login.component";
import {AuthGuardService} from "./shared/common/auth-gaurd.service";

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/login'},
  {path: 'login', component: LoginComponent},
  {
    path: 'ssk', loadChildren: () => import("./ssk/ssk.module").then(m => m.SskModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'service-graph',
    loadChildren: () => import("./service-graph/service-graph.module").then(m => m.ServiceGraphModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'reports', loadChildren: () => import("./report/report.module").then(m => m.ReportModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'dashboard',
    loadChildren: () => import("./dashboard/dashboard.module").then(m => m.DashboardModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'user-list',
    loadChildren: () => import("./user-list/user-list.module").then(m => m.UserListModule),
    canActivate: [AuthGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

