import {Injectable} from '@angular/core';
import {AuthenticationService} from "../shared/common/authentication.service";
import {HttpClient} from "@angular/common/http";
import {ApiEndPointsService} from "../shared/common/api-end-points.service";

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private auth: AuthenticationService, private http: HttpClient, private apiEndpoints: ApiEndPointsService) {
  }

  downloadReport(reportType: string, distributor_id: any, from_date: any, to_date: any, zone_id: any, region_id: any, area_id: any, territory_id: any) {
    let url = this.apiEndpoints.REPORTS.DOWNLOAD_REPORT(reportType, distributor_id, from_date, to_date, zone_id, region_id, area_id, territory_id) + '&access_token=' + this.auth.getAccessToken();
    window.open(url, '_blank');
  }

  getAmrUserReport(page: any, size: any) {
    return this.http.get(this.apiEndpoints.REPORTS.GET_AMR_USER_REPORT(page, size));
  }

  downloadAmrReportUserReport() {
    let url = this.apiEndpoints.REPORTS.DOWNLOAD_AMR_USER_REPORT() + '&access_token=' + this.auth.getAccessToken();
    window.open(url, '_blank');
  }

  downloadAmrReport(from_date: any, to_date: any) {
    let url = this.apiEndpoints.REPORTS.DOWNLOAD_AMR_REPORT(from_date, to_date) + '&access_token=' + this.auth.getAccessToken();
    window.open(url, '_blank');
  }

  amrPurchaseHistoryById(id: any) {
    return this.http.get(this.apiEndpoints.REPORTS.AMR_PUCHASE_HISTORY_BY_ID(id));
  }

}
