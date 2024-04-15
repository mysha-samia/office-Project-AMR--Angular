import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ToastrModule} from "ngx-toastr";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './auth/login/login.component';
import { SidenavComponent } from './layout/sidenav/sidenav.component';
import { TopnavComponent } from './layout/topnav/topnav.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { ReportsComponent } from './report/reports/reports.component';
import { ServiceGraphComponent } from './service-graph/service-graph/service-graph.component';
import { SskComponent } from './ssk/ssk/ssk.component';
import { ListOfMedicineNameAndSymptomsComponent } from './user-list/list-of-medicine-name-and-symptoms/list-of-medicine-name-and-symptoms.component';
import { UserListComponent } from './user-list/user-list/user-list.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { DiagnosticGraphComponent } from './widgets/diagnostic-graph/diagnostic-graph.component';
import { HospitalGraphComponent } from './widgets/hospital-graph/hospital-graph.component';
import { NewUserGraphComponent } from './widgets/new-user-graph/new-user-graph.component';
import { PrescriptionWithProductGraphComponent } from './widgets/prescription-with-product-graph/prescription-with-product-graph.component';
import { ProductPrescribedGraphComponent } from './widgets/product-prescribed-graph/product-prescribed-graph.component';
import { ReportSelectorComponent } from './widgets/report-selector/report-selector.component';
import { ReportSelectorForProductPrescribedReportComponent } from './widgets/report-selector-for-product-prescribed-report/report-selector-for-product-prescribed-report.component';
import { ScreeningGraphComponent } from './widgets/screening-graph/screening-graph.component';
import { SelectorComponent } from './widgets/selector/selector.component';
import { ServedGraphComponent } from './widgets/served-graph/served-graph.component';
import { SpecialistsReferralGraphComponent } from './widgets/specialists-referral-graph/specialists-referral-graph.component';
import { TelemedicineGraphComponent } from './widgets/telemedicine-graph/telemedicine-graph.component';
import { TopCountbarComponent } from './widgets/top-countbar/top-countbar.component';
import { TotalNewRegistrationUserGraphComponent } from './widgets/total-new-registration-user-graph/total-new-registration-user-graph.component';
import { UserRefuseToTakeTelemedicineButBuyMedicineComponent } from './widgets/user-refuse-to-take-telemedicine-but-buy-medicine/user-refuse-to-take-telemedicine-but-buy-medicine.component';
import { UserTakenTelemedicineServiceComponent } from './widgets/user-taken-telemedicine-service/user-taken-telemedicine-service.component';
import { UserWithMedicineNameGraphComponent } from './widgets/user-with-medicine-name-graph/user-with-medicine-name-graph.component';
import { UserWithPrescriptionGraphComponent } from './widgets/user-with-prescription-graph/user-with-prescription-graph.component';

import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {JwtInterceptorService} from "./services/jwt-interceptor.service";
import {ErrorInterceptorService} from "./services/error-interceptor.service";
import {MatProgressBar} from "@angular/material/progress-bar";
import {BsDatepickerModule} from "ngx-bootstrap/datepicker";
import {NgSelectModule} from "@ng-select/ng-select";
import {DropdownModule} from "primeng/dropdown";
import {CurrentDateComponent} from "./widgets/current-date/current-date.component";
import { UserWithSymptomsGraphComponent } from './widgets/user-with-symptoms-graph/user-with-symptoms-graph.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SidenavComponent,
    TopnavComponent,
    DashboardComponent,
    ReportsComponent,
    ServiceGraphComponent,
    SskComponent,
    ListOfMedicineNameAndSymptomsComponent,
    UserListComponent,
    DiagnosticGraphComponent,
    HospitalGraphComponent,
    NewUserGraphComponent,
    PrescriptionWithProductGraphComponent,
    ProductPrescribedGraphComponent,
    ReportSelectorComponent,
    ReportSelectorForProductPrescribedReportComponent,
    ScreeningGraphComponent,
    SelectorComponent,
    ServedGraphComponent,
    SpecialistsReferralGraphComponent,
    TelemedicineGraphComponent,
    TopCountbarComponent,
    TotalNewRegistrationUserGraphComponent,
    UserRefuseToTakeTelemedicineButBuyMedicineComponent,
    UserTakenTelemedicineServiceComponent,
    UserWithMedicineNameGraphComponent,
    UserWithPrescriptionGraphComponent,
    UserWithSymptomsGraphComponent,



  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule,
        ToastrModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        MatProgressBar,
        BsDatepickerModule.forRoot(),
        NgSelectModule,
        DropdownModule,
        CurrentDateComponent
    ],
  providers: [
    provideAnimationsAsync(),
    // {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptorService, multi: true},
    // {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptorService, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
