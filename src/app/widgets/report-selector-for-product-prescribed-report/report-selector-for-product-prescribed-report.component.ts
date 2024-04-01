import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-report-selector-for-product-prescribed-report',
  templateUrl: './report-selector-for-product-prescribed-report.component.html',
  styleUrl: './report-selector-for-product-prescribed-report.component.scss'
})
export class ReportSelectorForProductPrescribedReportComponent {
  @Input() isReport: boolean = false;
}
