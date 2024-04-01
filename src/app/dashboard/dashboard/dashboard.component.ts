import {Component, OnInit} from '@angular/core';
import {DashboardService} from "../../services/dashboard.service";
import {AuthenticationService} from "../../shared/common/authentication.service";

import {Router} from "@angular/router";
import {Localstorage} from "../../shared/common/localstorage";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  userTypeAMR: boolean = false;
  requestSubmitted: boolean = true;
  getUserTypeFromLocalStorage: any = null;
  distributorUsersSummaryData: any;
  serviceSummaryData: any;


  constructor(private dashboardService: DashboardService, private auth: AuthenticationService, private router: Router) {
  }

  ngOnInit(): void {
    this.clearCookies();
    this.getUserTypeFromLocalStorage = localStorage.getItem('userType');
    // this.auth.userTypeAMR.subscribe(data => {
    //   this.userTypeAMR = data;
    // }, error => {
    //   console.log('An error occurred fetching RxJs data');
    // });
    this.userTypeAMR = localStorage.getItem('userType') === 'AMR'
    this.getDistributorUsersSummaryData('');
  }

  getDistributorUsersSummaryData(agentId: any) {
    this.dashboardService.getDistributorUsersSummaryData(agentId).subscribe((res => {
      this.distributorUsersSummaryData = res;
    }), error => {
      console.log(error);
    });
  }

  filterData(event: any) {
    this.requestSubmitted = true;

    if (localStorage.getItem(Localstorage.KEYS.manufacturer_name) === null) {
      this.auth.__manufacturerName.subscribe((res: any) => {
        this.dashboardService.getServiceInfo(event, res).subscribe(res => {
          this.serviceSummaryData = res;
          this.requestSubmitted = false;

        })
      });
    } else {
      this.dashboardService.getServiceInfo(event).subscribe(res => {
        this.serviceSummaryData = res;
        this.requestSubmitted = false;
      })
    }
  }


  gotoUserList(user_type: string) {
    localStorage.setItem('userListType', user_type);
    this.router.navigate(['user-list']);
  }
  // In your component or service
  clearCookies() {
    const cookies = document.cookie.split(";");

    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i];
      const eqPos = cookie.indexOf("=");
      const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;
    }
  }


}

