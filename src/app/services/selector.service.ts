import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ApiEndPointsService} from "../shared/common/api-end-points.service";
import {Localstorage} from "../shared/common/localstorage";

@Injectable({
  providedIn: 'root'
})
export class SelectorService {

  constructor(private http: HttpClient, private apiEndpoints: ApiEndPointsService) {
  }

  getAllAgentTreeList(codeList: any) {
    return this.http.get(this.apiEndpoints.SELECTOR.GET_ALL_AGNET_TREE_LIST(codeList));
  }

  getAgentId(zone: any, region: any, area: any, territory: any) {
    if (territory && territory.length > 0) {
      return territory;
    } else if (area && area.length > 0) {
      return area;
    } else if (region && region.length > 0) {
      return region;
    } else if (zone && zone.length > 0) {
      return zone;
    }
    return this.getAgentIdFromStorage();
  }

  getAgentIdForAMR( area: any, territory: any, drugSeller: any) {
    if (drugSeller && drugSeller.length > 0) {
      return drugSeller;
    }else if (territory && territory.length > 0) {
      return territory;
    } else if (area && area.length > 0) {
      return area;
    }
    return this.getAgentIdFromStorage();
  }

  getAgentIdFromStorage() {
    return [Number(localStorage.getItem(Localstorage.KEYS.id))];
  }

  getSubAgents(agentIds: any, agentType: string) {
    console.log(agentIds);
    let url = this.apiEndpoints.SELECTOR.GET_SUB_AGENTS(agentType);
    for (let i = 0; i < agentIds.length; i++) {
      url += `&agentId=${agentIds[i]}`
    }
    return this.http.get(url + '&access_token=' + localStorage.getItem(Localstorage.KEYS.accessToken)) ;
  }

}
