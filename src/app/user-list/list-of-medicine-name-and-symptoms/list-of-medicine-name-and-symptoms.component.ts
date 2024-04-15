import {Component, OnInit} from '@angular/core';
import {ReportService} from "../../services/report.service";
import {MatDialog} from "@angular/material/dialog";
import {DatePipe} from "@angular/common";
import {MatProgressBarModule} from '@angular/material/progress-bar';

@Component({
  selector: 'app-list-of-medicine-name-and-symptoms',
  templateUrl: './list-of-medicine-name-and-symptoms.component.html',
  styleUrls: ['./list-of-medicine-name-and-symptoms.component.scss'],
  providers: [DatePipe, MatProgressBarModule]
})
export class ListOfMedicineNameAndSymptomsComponent implements OnInit {

  prescriptionPicture: any;
  medicineList: any;
  loader: boolean = true;

  constructor(private reportService: ReportService, private dialog: MatDialog, private datePipe: DatePipe) {
  }

  ngOnInit(): void {
    this.prescriptionPicture = localStorage.getItem('prescriptionPicture');
    this.amrPurchaseHistoryById();
  }

  amrPurchaseHistoryById() {
    if (localStorage.getItem('purchaseId')) {
      this.loader = true;
      this.reportService.amrPurchaseHistoryById(localStorage.getItem('purchaseId')).subscribe((res: any) => {
        this.medicineList = res?.medicine_purchased;
        this.loader = false;
      }, error => {
        this.loader = false;
      });
    }
  }

  formatDate(date: any) {
    if (date == null || date == '') {
      return '';
    }
    return this.datePipe.transform(new Date(date), 'dd MMM yyyy');
  }

  closeDialogue() {
    this.dialog.closeAll();
  }

  extractDate(inputString: any) {
    // Split the input string into date and time parts
    const [datePart, timePart] = inputString.split('; ');

    // Return only the date part
    return datePart + ';';
  }
}
