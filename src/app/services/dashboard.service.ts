import { Injectable } from '@angular/core';
import {AuthenticationService} from "../shared/common/authentication.service";
import {HttpClient} from "@angular/common/http";
import {ApiEndPointsService} from "../shared/common/api-end-points.service";

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private auth:AuthenticationService,private http:HttpClient,private apiEndpoints:ApiEndPointsService) { }

  getDistributorUsersSummaryData(agentId: any) {
    return this.http.get(this.apiEndpoints.DASHBOARD.GET_DISTRIBUTOR_USERS_SUMMARY_DATA(agentId));
  }

  getServiceInfo(event: any, name:any=this.auth.getManufacturerName()) {
      return this.http.get(this.apiEndpoints.DASHBOARD.GET_SERVICE_INFO(event.startDate,event.endDate,event.agentId,name))
  }
}

