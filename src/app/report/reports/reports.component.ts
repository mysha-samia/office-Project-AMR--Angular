import { Component } from '@angular/core';
import {ReportService} from "../../services/report.service";
import { Input } from '@angular/core';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.scss'
})
export class ReportsComponent {
  selectedTab: string ='SSK_Performance_Report';
  userTypeAMR: any;
  selectorValues:any;
  selectorColorForSSKPerformanceReport: any;
  selectorColorForSSKPerformanceReportText: any;
  selectorColorForProductPrescribedReport: any;
  selectorColorForProductPrescribedReportText: any;
  selectorColorForReferralCenterReport: any;
  selectorColorForReferralCenterReportText: any;


  filterData(event: any) {
    this.selectorValues = event;
  }

  onClickTab(sskPerformanceReport: string) {

  }
}
