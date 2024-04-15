import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {Localstorage} from "./localstorage";
import {AuthenticationService} from "./authentication.service";

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
      console.log('An error occurred fetching RxJs data');
    });
  }

  USER = {
    GET_USER_ID() {
      return environment.base_url + environment.api_version_6 + "agents/me";
    }
  };

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
    GET_SERVICE_INFO(startDate: any, endDate: any, agentId: any, manufacturerName: any) {
      let parameter = 'distributor/overview-service-info';

      if (localStorage.getItem('userType') === 'AMR') {
        parameter = 'amr-service-overview';
      }

      localStorage.setItem('selectedFromDate', startDate);
      localStorage.setItem('selectedToDate', endDate);

      return environment.base_url + environment.api_version_6 + `${parameter}?from_date=${startDate}&to_date=${endDate}&manufacturer_name=${manufacturerName}${this.getAgentId(agentId)}`;
    },
    getAgentId(agentIds: any) {
      let selectedAgentIDs = '';
      let url = '';
      for (let i = 0; i < agentIds.length; i++) {
        url += `&agent_ids=${agentIds[i]}`;
        selectedAgentIDs += `&agent_ids=${agentIds[i]}`;
        localStorage.setItem('selectedAgentIDs', selectedAgentIDs);
      }
      return url;
    }
  };

  SSK = {
    GET_SSK_LIST(startDate: any, endDate: any, agentId: any, page: any, size: any) {
      return environment.base_url + environment.api_version_6 + `distributor/ssk-list?from_date=${startDate}&to_date=${endDate}&page=${page}&size=${size}${this.getAgentId(agentId)}`;
    },
    DOWNLOAD_SSK_LIST(startDate: any, endDate: any, agentId: any) {
      console.log(environment.base_url + environment.api_version_6 + `distributor/ssk-list/download?from_date=${startDate}&to_date=${endDate}${this.getAgentId(agentId)}`);
      return environment.base_url + environment.api_version_6 + `distributor/ssk-list/download?from_date=${startDate}&to_date=${endDate}&${this.getAgentId(agentId)}`;
    },
    getAgentId(agentIds: any) {
      let url = '';
      for (let i = 0; i < agentIds.length; i++) {
        url += `&agent_ids=${agentIds[i]}`
      }
      return url;
    }
  };

  GRAPH = {
    GET_GRAPH_DATA(startDate: any, endDate: any, agentId: any, manufacturerName: any) {
      let parameter = 'distributor/ssk';

      if (localStorage.getItem('userType') === 'AMR') {
        parameter = 'amr';
      }
      return environment.base_url + environment.api_version_6 + `${parameter}-service-graph?manufacturer_name=${manufacturerName}&from_date=${startDate}&to_date=${endDate}${this.getAgentId(agentId)}`;
    },
    getAgentId(agentIds: any) {
      let url = '';
      for (let i = 0; i < agentIds.length; i++) {
        url += `&agent_ids=${agentIds[i]}`
      }
      return url;
    }
  };

  REPORTS = {
    DOWNLOAD_REPORT(reportType: string, distributor_id: any, from_date: any, to_date: any, zone_id: any, region_id: any, area_id: any, territory_id: any) {
      let url = '';
      if (reportType == 'product-prescribed') {
        if (territory_id && territory_id.length != 0 && territory_id != -4) {
          distributor_id = territory_id;
        } else if (area_id && area_id.length != 0 && area_id != -3) {
          distributor_id = area_id;
        } else if (region_id && region_id.length != 0 && region_id != -2) {
          distributor_id = region_id;
        } else if (zone_id && zone_id.length != 0 && zone_id != -1) {
          distributor_id = zone_id;
        } else {
          distributor_id = distributor_id;
        }

        url = environment.base_url + environment.api_version_6 + `distributor-reports/${reportType}/download?from_date=${from_date}&to_date=${to_date}&agent_id=${distributor_id}`;
        url += `&manufacturerName=${localStorage.getItem(Localstorage.KEYS.manufacturer_name)}`;
        console.log(url);
        return url;
      } else {
        url = environment.base_url + environment.api_version_6 + `distributor-reports/${reportType}/download?from_date=${from_date}&to_date=${to_date}&distributor_id=${distributor_id}`;
        if (zone_id && zone_id.length != 0 && zone_id != -1) {
          url += `&zone_id=${zone_id}`;
        }
        if (region_id && region_id.length != 0 && region_id != -2) {
          url += `&region_id=${region_id}`;
        }
        if (area_id && area_id.length != 0 && area_id != -3) {
          url += `&area_id=${area_id}`;
        }
        if (territory_id && territory_id.length != 0 && territory_id != -4) {
          url += `&territory_id=${territory_id}`;
        }

        if (reportType == 'territory-report') {
          url += `&manufacturerName=${localStorage.getItem(Localstorage.KEYS.manufacturer_name)}`;
        }
        console.log(url);
        return url;
      }
    },

    GET_AMR_USER_REPORT(page: any, size: any) {
      let agent_ids: any = localStorage.getItem('selectedAgentIDs');
      let from_date: any = localStorage.getItem('selectedFromDate');
      let to_date: any = localStorage.getItem('selectedToDate');
      let user_type: any = localStorage.getItem('userListType');
      return environment.base_url + environment.api_version_6 + `amr-user-report-view?from_date=${from_date}&to_date=${to_date}&page=${page}&size=${size}&user_type=${user_type}${agent_ids}`;
    },

    DOWNLOAD_AMR_USER_REPORT() {
      let agent_ids: any = localStorage.getItem('selectedAgentIDs');
      let from_date: any = localStorage.getItem('selectedFromDate');
      let to_date: any = localStorage.getItem('selectedToDate');
      let user_type: any = localStorage.getItem('userListType');
      return environment.base_url + environment.api_version_6 + `amr-user-report-download?from_date=${from_date}&to_date=${to_date}&user_type=${user_type}${agent_ids}`;
    },

    DOWNLOAD_AMR_REPORT(from_date: any, to_date: any) {
      let agent_ids: any = localStorage.getItem('selectedAgentIDs');
      agent_ids = agent_ids.replace(/-4/g, localStorage.getItem(Localstorage.KEYS.id));
      console.log(environment.base_url + environment.api_version_6 + `amr-report/download?from_date=${from_date}&to_date=${to_date}${agent_ids}`);
      return environment.base_url + environment.api_version_6 + `amr-report/download?from_date=${from_date}&to_date=${to_date}${agent_ids}`;
    },

    AMR_PUCHASE_HISTORY_BY_ID(id: any) {
      return environment.base_url + environment.api_version_6 + `amr-purchase-history/${id}`;
    }
  };
}
