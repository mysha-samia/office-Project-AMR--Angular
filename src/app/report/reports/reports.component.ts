import {Component, OnInit} from '@angular/core';
import {ReportService} from "../../services/report.service";

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {

  selectedTab: string = 'SSK_Performance_Report';
  selectorValues: any;

  selectorColorForSSKPerformanceReport: any = '#4491FF';
  selectorColorForProductPrescribedReport: any = '#FFFFFF';
  selectorColorForReferralCenterReport: any = '#FFFFFF';
  selectorColorForSpecialistReferralReport: any = '#FFFFFF';
  selectorColorForTerritoryWiseReport: any = '#FFFFFF';
  selectorColorForDrugSellerPerformanceReport: any = '#FFFFFF';

  selectorColorForSSKPerformanceReportText: any = '#FFFFFF';
  selectorColorForProductPrescribedReportText: any = '#000000';
  selectorColorForReferralCenterReportText: any = '#000000';
  selectorColorForSpecialistReferralReportText: any = '#000000';
  selectorColorForTerritoryWiseReportText: any = '#000000';
  selectorColorForDrugSellerPerformanceReportText: any = '#000000';

  selectedReportIsProdPresRepo: boolean = false;
  userTypeAMR: boolean = localStorage.getItem('userType') === 'AMR';

  constructor(private reportService: ReportService) {
  }

  ngOnInit(): void {
    localStorage.setItem('selectedReport', 'SSK_Performance_Report');
    this.selectedTab = 'SSK_Performance_Report';

    if (localStorage.getItem('userType') == 'AMR') {
      this.selectorColorForDrugSellerPerformanceReport = '#4491FF';
      this.selectorColorForDrugSellerPerformanceReportText = '#FFFFFF';
    }
  }

  onClickTab(str: string) {
    if (str == 'SSK_Performance_Report') {
      localStorage.setItem('selectedReport', 'SSK_Performance_Report');
      this.selectedReportIsProdPresRepo = false;
      this.selectedTab = 'SSK_Performance_Report';
      this.selectorColorForSSKPerformanceReport = '#4491FF';
      this.selectorColorForProductPrescribedReport = '#FFFFFF';
      this.selectorColorForReferralCenterReport = '#FFFFFF';
      this.selectorColorForSpecialistReferralReport = '#FFFFFF';
      this.selectorColorForTerritoryWiseReport = '#FFFFFF';
      this.selectorColorForDrugSellerPerformanceReport = '#FFFFFF';

      this.selectorColorForSSKPerformanceReportText = '#FFFFFF';
      this.selectorColorForProductPrescribedReportText = '#000000';
      this.selectorColorForReferralCenterReportText = '#000000';
      this.selectorColorForSpecialistReferralReportText = '#000000';
      this.selectorColorForTerritoryWiseReportText = '#000000';
      this.selectorColorForDrugSellerPerformanceReportText = '#000000';
    } else if (str == 'Product_Prescribed_Report') {
      localStorage.setItem('selectedReport', 'Product_Prescribed_Report');
      this.selectedReportIsProdPresRepo = true;
      this.selectedTab = 'Product_Prescribed_Report';
      this.selectorColorForSSKPerformanceReport = '#FFFFFF';
      this.selectorColorForProductPrescribedReport = '#4491FF';
      this.selectorColorForReferralCenterReport = '#FFFFFF';
      this.selectorColorForSpecialistReferralReport = '#FFFFFF';
      this.selectorColorForTerritoryWiseReport = '#FFFFFF';
      this.selectorColorForDrugSellerPerformanceReport = '#FFFFFF';

      this.selectorColorForSSKPerformanceReportText = '#000000';
      this.selectorColorForProductPrescribedReportText = '#FFFFFF';
      this.selectorColorForReferralCenterReportText = '#000000';
      this.selectorColorForSpecialistReferralReportText = '#000000';
      this.selectorColorForTerritoryWiseReportText = '#000000';
      this.selectorColorForDrugSellerPerformanceReportText = '#000000';
    } else if (str == 'Referral_Center_Report') {
      this.selectedReportIsProdPresRepo = false;
      localStorage.setItem('selectedReport', 'Referral_Center_Report');
      this.selectedTab = 'Referral_Center_Report';
      this.selectorColorForSSKPerformanceReport = '#FFFFFF';
      this.selectorColorForProductPrescribedReport = '#FFFFFF';
      this.selectorColorForReferralCenterReport = '#4491FF';
      this.selectorColorForSpecialistReferralReport = '#FFFFFF';
      this.selectorColorForTerritoryWiseReport = '#FFFFFF';
      this.selectorColorForDrugSellerPerformanceReport = '#FFFFFF';

      this.selectorColorForSSKPerformanceReportText = '#000000';
      this.selectorColorForProductPrescribedReportText = '#000000';
      this.selectorColorForReferralCenterReportText = '#FFFFFF';
      this.selectorColorForSpecialistReferralReportText = '#000000';
      this.selectorColorForTerritoryWiseReportText = '#000000';
      this.selectorColorForDrugSellerPerformanceReportText = '#000000';
    } else if (str == 'Specialist_Referral_Report') {
      localStorage.setItem('selectedReport', 'Specialist_Referral_Report');
      this.selectedReportIsProdPresRepo = false;
      this.selectedTab = 'Specialist_Referral_Report';
      this.selectorColorForSSKPerformanceReport = '#FFFFFF';
      this.selectorColorForProductPrescribedReport = '#FFFFFF';
      this.selectorColorForReferralCenterReport = '#FFFFFF';
      this.selectorColorForSpecialistReferralReport = '#4491FF';
      this.selectorColorForTerritoryWiseReport = '#FFFFFF';
      this.selectorColorForDrugSellerPerformanceReport = '#FFFFFF';

      this.selectorColorForSSKPerformanceReportText = '#000000';
      this.selectorColorForProductPrescribedReportText = '#000000';
      this.selectorColorForReferralCenterReportText = '#000000';
      this.selectorColorForSpecialistReferralReportText = '#FFFFFF';
      this.selectorColorForTerritoryWiseReportText = '#000000';
      this.selectorColorForDrugSellerPerformanceReportText = '#000000';
    } else if (str == 'Territory_Wise_Report') {
      localStorage.setItem('selectedReport', 'Territory_Wise_Report');
      this.selectedReportIsProdPresRepo = false;
      this.selectedTab = 'Territory_Wise_Report';
      this.selectorColorForSSKPerformanceReport = '#FFFFFF';
      this.selectorColorForProductPrescribedReport = '#FFFFFF';
      this.selectorColorForReferralCenterReport = '#FFFFFF';
      this.selectorColorForSpecialistReferralReport = '#FFFFFF';
      this.selectorColorForTerritoryWiseReport = '#4491FF';
      this.selectorColorForDrugSellerPerformanceReport = '#FFFFFF';

      this.selectorColorForSSKPerformanceReportText = '#000000';
      this.selectorColorForProductPrescribedReportText = '#000000';
      this.selectorColorForReferralCenterReportText = '#000000';
      this.selectorColorForSpecialistReferralReportText = '#000000';
      this.selectorColorForTerritoryWiseReportText = '#FFFFFF';
      this.selectorColorForDrugSellerPerformanceReportText = '#000000';
    } else if (str == 'Drug_Seller_Performance_Report') {
      localStorage.setItem('selectedReport', 'Drug_Seller_Performance_Report');
      this.selectedReportIsProdPresRepo = false;
      this.selectedTab = 'Drug_Seller_Performance_Report';
      this.selectorColorForSSKPerformanceReport = '#FFFFFF';
      this.selectorColorForProductPrescribedReport = '#FFFFFF';
      this.selectorColorForReferralCenterReport = '#FFFFFF';
      this.selectorColorForSpecialistReferralReport = '#FFFFFF';
      this.selectorColorForTerritoryWiseReport = '#FFFFFF';
      this.selectorColorForDrugSellerPerformanceReport = '#4491FF';

      this.selectorColorForSSKPerformanceReportText = '#000000';
      this.selectorColorForProductPrescribedReportText = '#000000';
      this.selectorColorForReferralCenterReportText = '#000000';
      this.selectorColorForSpecialistReferralReportText = '#000000';
      this.selectorColorForTerritoryWiseReportText = '#000000';
      this.selectorColorForDrugSellerPerformanceReportText = '#FFFFFF';
    }

  }

  filterData(event: any) {
    this.selectorValues = event;
    // console.log(this.selectorValues);
    // console.log(this.selectedTab);
  }

  onSelectReportType(event: any) {
    console.log(event);
    this.selectedReportIsProdPresRepo = false;
    // console.log(this.selectorValues);
    // console.log(this.selectedTab);
  }

  onDownloadClicked() {
    let reportType = 'ssk-report';
    if (this.selectedTab == 'SSK_Performance_Report') {
      reportType = 'ssk-report';
    } else if (this.selectedTab == 'Product_Prescribed_Report') {
      reportType = 'product-prescribed';
    } else if (this.selectedTab == 'Referral_Center_Report') {
      reportType = 'referral-center-report';
    } else if (this.selectedTab == 'Specialist_Referral_Report') {
      reportType = 'specialist-report';
    } else if (this.selectedTab == 'Territory_Wise_Report') {
      reportType = 'territory-report';
    } else if (this.selectedTab == 'Drug_Seller_Performance_Report') {
      reportType = 'drug-seller-performance-report';
    }

    if (localStorage.getItem('userType') == 'AMR') {
      reportType = 'drug-seller-performance-report';
    }

    if (reportType != 'drug-seller-performance-report') {
      this.reportService.downloadReport(reportType, this.selectorValues?.distributorId, this.selectorValues?.startDate, this.selectorValues?.endDate, this.selectorValues?.zoneId, this.selectorValues?.regionId, this.selectorValues?.areaId, this.selectorValues?.territoryId);
    } else if (reportType == 'drug-seller-performance-report') {
      this.reportService.downloadAmrReport(this.selectorValues?.startDate, this.selectorValues?.endDate);
    }
  }
}


