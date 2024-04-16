import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ApiEndPointsService} from "../shared/common/api-end-points.service";
import {GraphResponseModel} from "../models/GraphResponseModel";
import {Observable} from "rxjs";
import {GraphDataTypeModel} from "../models/GraphDataTypeModel";
import {AuthenticationService} from "../shared/common/authentication.service";
import {Localstorage} from "../shared/common/localstorage";

@Injectable({
  providedIn: 'root'
})
export class GraphService {

  constructor(private http: HttpClient, private apiEndPoints: ApiEndPointsService, private auth: AuthenticationService) {
  }

  getGraphData(event: any,startDate: any, endDate: any, agentId: any, manufacturerName: any,selectedService: any[]): Observable<GraphResponseModel> {
      let    parameter = 'distributor/ssk';

    let url = this.apiEndPoints.GRAPH.GET_GRAPH_DATA(event.startDate, event.endDate, event.agentId ,this.auth.getManufacturerName() )+ GraphService.getTypes(selectedService)+ '&access_token='+localStorage.getItem(Localstorage.KEYS.accessToken);

    return this.http.get<GraphResponseModel>(url);



  }

  monthDiffMoreThan13(d1: Date, d2: Date) {
    let months;
    months = (d2.getFullYear() - d1.getFullYear()) * 12;
    months -= d1.getMonth();
    months += d2.getMonth();
    return months > 12;
  }

  private static getTypes(selectedService: any[]) {
    if (selectedService.includes('1')) {
      if (localStorage.getItem('userType') === 'AMR') {
        return '&types=USER_WITH_PRESCRIPTION&types=USER_WITH_SYMPTOMS&types=USER_WITH_MEDICINE_NAME&types=TOTAL_NEW_REGISTRATION_USER&types=USER_REFUSE_TO_TAKE_TELEMEDICINE_BUT_BUY_MEDICINE&types=USER_TAKEN_TELEMEDICINE';
      } else {
        return '&types=DIAGNOSTIC&types=NEW_USERS&types=PRESCRIPTIONS_WITH_PRODUCT&types=PRODUCT_PRESCRIBED&types=SCREENING&types=SERVED&types=SPECIALISTS&types=TELEMEDICINE&types=HOSPITAL';
      }
    } else {
      let typeUrl = '';
      for (let i = 0; i < selectedService.length; i++) {
        typeUrl += `&types=${selectedService[i]}`;
      }
      return typeUrl;
    }
  }

  getCategory(data: GraphDataTypeModel[] | undefined) {
    if (data === undefined || data === null) return [];
    else {
      return data?.map(function (d: GraphDataTypeModel) {
        return d.name;
      })
    }
  }

  getChartData(data: GraphDataTypeModel[] | undefined) {
    if (data === undefined || data === null) return [];
    else {
      return data?.map(function (d: GraphDataTypeModel) {
        return d.count;
      })
    }
  }

  private getAgentId(agentIds: any) {
    let url = '';
    for (let i = 0; i < agentIds.length; i++) {
      url += `&agent_ids=${agentIds[i]}`
    }
    return url;
    }


}
