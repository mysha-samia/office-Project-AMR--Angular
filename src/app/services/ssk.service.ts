import {Injectable} from '@angular/core';
import {AuthenticationService} from "../shared/common/authentication.service";
import {HttpClient} from "@angular/common/http";
import {ApiEndPointsService} from "../shared/common/api-end-points.service";

@Injectable({
  providedIn: 'root'
})
export class SskService {

  constructor(private auth: AuthenticationService, private http: HttpClient, private apiEndpoints: ApiEndPointsService) {
  }

  getSskList(event: any, page: any, size: any) {
    return this.http.get(this.apiEndpoints.SSK.GET_SSK_LIST(event.startDate, event.endDate, event.agentId, page, size));
  }

  downloadSskList(event: any) {
    let url = this.apiEndpoints.SSK.DOWNLOAD_SSK_LIST(event.startDate, event.endDate, event.agentId) + '&access_token=' + this.auth.getAccessToken();
    window.open(url, '_blank');
  }
}
