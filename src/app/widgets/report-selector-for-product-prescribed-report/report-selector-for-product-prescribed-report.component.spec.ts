import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportSelectorForProductPrescribedReportComponent } from './report-selector-for-product-prescribed-report.component';

describe('ReportSelectorForProductPrescribedReportComponent', () => {
  let component: ReportSelectorForProductPrescribedReportComponent;
  let fixture: ComponentFixture<ReportSelectorForProductPrescribedReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReportSelectorForProductPrescribedReportComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReportSelectorForProductPrescribedReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
