import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SskComponent} from "./ssk/ssk.component";

const routes: Routes = [
  {path: '', component: SskComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SskRoutingModule { }
