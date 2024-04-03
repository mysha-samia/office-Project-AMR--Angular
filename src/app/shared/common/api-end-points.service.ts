import { Injectable } from '@angular/core';
import {AuthenticationService} from "./authentication.service";
import{environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ApiEndPointsService {
  private static API_VERSION_1 = '/api/v1';
  private static API_VERSION_6 = '/api/v6';
  userTypeAMR: boolean = true;


  constructor(private auth: AuthenticationService) {
    this.auth.userTypeAMR.subscribe(data => {
      this.userTypeAMR = data;
    }, error => {
      console.log('An error occurred fetching RXJS data');
    });
  }

  SELECTOR = {
    GET_ALL_AGNET_TREE_LIST(codeList: any) {
      return environment.base_url + environment.api_version_6 + `subordinates/agents/by/type-codes?codeList=${codeList}&direction=DESC&fieldName=id&page=0&size=100&slice=true`;
    },
    GET_SUB_AGENTS(agentType: string) {
      return environment.base_url + environment.api_version_7 + `subordinates/agents/by/type-codes?codeList=${agentType}&size=100&slice=true`;
    }
  };
  DASHBOARD = {
    GET_DISTRIBUTOR_USERS_SUMMARY_DATA(agentID: any) {
      let url = environment.base_url + environment.api_version_6 + 'distributor/overview-user-info';
      if (agentID && agentID != '') {
        url = environment.base_url + environment.api_version_6 + 'distributor/overview-user-info?agent_id=' + agentID;
      }
      return url;
    },

    GET_SERVICE_INFO(startDate:any,endDate:any,agentId:any,manufacturerName:any) {
      let parameter ='distributor/overview-service-info';
      if (localStorage.getItem('userType')==='AMR'){
        parameter='amr-service-overview';
      }
      localStorage.setItem('selectFormDate',startDate);
      localStorage.setItem('selectedToDate',endDate);
      return environment.base_url+environment.api_version_6+`${parameter}?from_date=${startDate}&to_date=${endDate}&manufacturer_name=${manufacturerName}${this.getAgentId(agentId)}`;
    },
    getAgentId(agentIds: any) {
      let selectedAgentIDs ='';
      let url='';
      for(let i=0;i<agentIds.length;i++){
        url += `&agent_ids=${agentIds[i]}`;
        selectedAgentIDs+=`&agent_ids=${agentIds[i]}`;
        localStorage.setItem('selectedAgentIds',selectedAgentIDs);
      }
      return url;

    }
  }
}

