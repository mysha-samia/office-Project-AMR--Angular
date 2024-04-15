import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ServiceGraphComponent} from "./service-graph/service-graph.component";

const routes: Routes = [
  {path: '', component: ServiceGraphComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceGraphRoutingModule { }
