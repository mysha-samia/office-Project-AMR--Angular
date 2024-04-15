import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserListComponent} from "./user-list/user-list.component";
import { UserListRoutingModule } from './user-list-routing.module';
import {ListOfMedicineNameAndSymptomsComponent} from "./list-of-medicine-name-and-symptoms/list-of-medicine-name-and-symptoms.component";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {NgbPaginationModule} from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [//UserListComponent,
  // ListOfMedicineNameAndSymptomsComponent
  ],
  imports: [
    CommonModule,
    UserListRoutingModule,
    MatProgressBarModule,
    NgbPaginationModule
  ]
})
export class UserListModule { }
