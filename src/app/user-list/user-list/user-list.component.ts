import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {
  ListOfMedicineNameAndSymptomsComponent
} from "../list-of-medicine-name-and-symptoms/list-of-medicine-name-and-symptoms.component";
import {Router} from "@angular/router";
import {ReportService} from "../../services/report.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  loader: boolean = true;
  userList: any;
  isNewUserRegistration: boolean = false;
  item: any = 10;
  page: number = 1;
  size: number = 50;
  pagination: any;
  headerOfTable: any;

  constructor(private dialog: MatDialog, private router: Router, private reportService: ReportService,
              private toastrMessage: ToastrService) {
  }

  ngOnInit(): void {
    this.headerOfTable = this.removeUnderscoreAndMakeFirstLetterCapital(localStorage.getItem('userListType'));
    this.isNewUserRegistration = localStorage.getItem('userListType') == 'NEW_USER_REGISTRATION';
    this.getAmrUserReport();
  }

  openDialog(user: any) {
    localStorage.removeItem('prescriptionPicture');
    localStorage.removeItem('purchaseId');

    localStorage.setItem('prescriptionPicture', user?.prescriptionPicture);
    localStorage.setItem('purchaseId', user?.id);

    this.dialog.open(ListOfMedicineNameAndSymptomsComponent);
  }

  gotoDashboard() {
    this.router.navigate(['dashboard']);
  }

  getAmrUserReport() {
    this.loader = true;
    this.reportService.getAmrUserReport(this.page - 1, this.size).subscribe((res: any) => {
      this.userList = res?.data;
      this.pagination = res?.pagination;
      this.loader = false;
    }, error => {
      this.loader = false;
      this.toastrMessage.error('An error occurred while fetching the user list');
    });
  }

  downloadAmrReportUserReport() {
    this.reportService.downloadAmrReportUserReport();
  }

  formatDate(serviceDate: any) {
    let date = new Date(serviceDate);
    return date.toLocaleString('en-US');
  }

  extractDate(inputString: any) {
    // Split the input string into date and time parts
    const [datePart, timePart] = inputString.split('; ');

    // Return only the date part
    return datePart + ';';
  }

  extractTime(inputString: any) {
    // Split the input string into date and time parts
    const [datePart, timePart] = inputString.split('; ');

    // Return only the time part
    return timePart;
  }

  onPaginateChange($event: number) {
    // console.log($event);
    this.page = $event;
    this.getAmrUserReport();
  }

  removeUnderscoreAndMakeFirstLetterCapital(str: any) {
    str = str.replace("_", " ").replace("_", " ").replace("_", " ").replace("_", " ").replace("_", " ").replace("_", " ").replace("_", " ").replace("_", " ").replace("_", " ").replace("_", " ");
    str = str.toLowerCase();
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
}
