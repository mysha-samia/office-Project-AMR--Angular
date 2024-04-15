import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SelectorService} from "../../services/selector.service";
import {AuthenticationService} from "../../shared/common/authentication.service";
import {Localstorage} from "../../shared/common/localstorage";

@Component({
  selector: 'app-report-selector',
  templateUrl: './report-selector.component.html',
  styleUrls: ['./report-selector.component.scss']
})
export class ReportSelectorComponent implements OnInit {

  maxStartDate: Date = new Date();
  maxEndDate: Date = new Date();
  y = new Date().getFullYear();
  m = new Date().getMonth();
  startDate: any = new Date(this.y, this.m, 1);
  minDate: Date = this.startDate;
  endDate: any = new Date();

  zone: any;
  zoneIds: any;
  region: any;
  regionIds: any;
  area: any;
  areaIds: any;
  territory: any;
  territoryIds: any;

  selectedTerritory: any;
  selectedArea: any;
  selectedRegion: any;
  selectedZone: any;
  requestSubmitted: boolean = true;

  multipleSelect: boolean = true;

  @Output() filterData = new EventEmitter();
  @Input() monthOnly: boolean = false;
  @Input() isReport: boolean = false;

  constructor(private selectorService: SelectorService, private auth: AuthenticationService) {
  }

  ngOnInit(): void {
    this.multipleSelect = window.location.pathname != '/reports';

    if (localStorage.getItem(Localstorage.KEYS.id) === null) {
      this.auth.__agentId.subscribe((agentId: any) => {
        if (agentId) {
          this.getSubAgents([agentId], 'SSK_ZONE', false);
        }
      });
    } else this.getSubAgents(this.selectorService.getAgentIdFromStorage(), 'SSK_ZONE', false);
    this.getSelectorValues(false);
  }

  getSubAgents(agentIds: any, type: string, filtered: boolean = true, deleted: boolean = false) {
    // console.log(agentIds);
    // console.log(type);
    this.clearSubAgents(type, deleted);
    if (filtered)
      agentIds = this.changeValueForAll(this.onAgentSelection(agentIds), type, deleted);
    if (agentIds.length > 0) {
      this.requestSubmitted = true;
      this.selectorService.getSubAgents(agentIds, type).subscribe((res: any) => {
        if (type === 'SSK_ZONE') {
          this.zone = res?.content;
          this.zone = this.zone.sort((a: { name: string; }, b: { name: any; }) => a.name.localeCompare(b.name));
          this.zoneIds = this.zone.map((r: any) => r.id);
          this.zone.splice(0, 0, {id: -1, name: 'All'});
        } else if (type === 'SSK_REGION') {
          this.region = res?.content;
          this.region = this.region.sort((a: { name: string; }, b: { name: any; }) => a.name.localeCompare(b.name));
          this.regionIds = this.region.map((r: any) => r.id);
          this.region.splice(0, 0, {id: -2, name: 'All'});
        } else if (type === 'SSK_AREA') {
          this.area = res?.content;
          this.area = this.area.sort((a: { name: string; }, b: { name: any; }) => a.name.localeCompare(b.name));
          this.areaIds = this.area.map((r: any) => r.id);
          this.area.splice(0, 0, {id: -3, name: 'All'});
        } else if (type === 'SSK_TERRITORY') {
          this.territory = res?.content;
          this.territory = this.territory.sort((a: { name: string; }, b: {
            name: any;
          }) => a.name.localeCompare(b.name));
          this.territoryIds = this.territory.map((r: any) => r.id);
          this.territory.splice(0, 0, {id: -4, name: 'All'});
        }
        this.requestSubmitted = false;

      }, error => this.requestSubmitted = false)
    }
  }

  onAddTerritory(agentIds: any, deleted: boolean = false) {
    // this.clearSubAgents('', deleted);
    this.changeValueForAll(this.onAgentSelection(agentIds), '', deleted);
  }

  onAgentSelection(values: any) {
    if (values.length === 1) {
      return values;
    } else if (values.length === 0) {
      return [-1];
    } else if (values[0] != -1 && values?.includes(-1)) {
      return [-1];
    } else {
      return values.filter((id: any) => id !== -1);
    }
  }

  changeValueForAll(ids: any, type: string, deleted: boolean) {
    if (ids && ids[0] === -1) {
      switch (type) {
        case ('SSK_REGION'):
          if (!deleted) this.selectedZone = ids;
          return this.zoneIds;
        case ('SSK_AREA'):
          if (!deleted) this.selectedRegion = ids;
          return this.regionIds;
        case ('SSK_TERRITORY'):
          if (!deleted) this.selectedArea = ids;
          return this.areaIds;
        default:
          if (!deleted) this.selectedTerritory = ids;
          return this.territoryIds;
      }
    } else {
      switch (type) {
        case ('SSK_REGION'):
          this.selectedZone = ids;
          break;
        case ('SSK_AREA'):
          this.selectedRegion = ids;
          break;
        case ('SSK_TERRITORY'):
          this.selectedArea = ids;
          break;
        default:
          this.selectedTerritory = ids;
          break;
      }
      return ids;
    }
  }

  selectStartDate() {
    this.minDate = this.startDate;
  }

  selectEndDate() {
    this.maxStartDate = this.endDate;
  }

  //UTC to millisecond
  getTimeStamp(date: any) {
    return new Date(date).getTime();
  }

  getSelectorValues(filtered: boolean = true) {
    let agentId;
    if (filtered) {
      agentId = this.selectorService.getAgentId(this.changeValueForAll(this.selectedZone, 'SSK_REGION', false),
        this.changeValueForAll(this.selectedRegion, 'SSK_AREA', false),
        this.changeValueForAll(this.selectedArea, 'SSK_TERRITORY', false),
        this.changeValueForAll(this.selectedTerritory, '', false));
    } else {
      agentId = this.selectorService.getAgentId(this.selectedZone, this.selectedRegion, this.selectedArea, this.selectedTerritory);
    }
    if (!this.isReport) {
      let data = {
        'startDate': this.getTimeStamp(this.startDate),
        'endDate': this.getTimeStamp(this.endDate),
        'agentId': agentId
      }
      this.filterData.emit(data);
    } else {
      let data = {
        'startDate': this.getTimeStamp(this.startDate),
        'endDate': this.getTimeStamp(this.endDate),
        'distributorId': localStorage.getItem(Localstorage.KEYS.id),
        'zoneId': this.selectedZone,
        'regionId': this.selectedRegion,
        'areaId': this.selectedArea,
        'territoryId': this.selectedTerritory,
      }
      this.filterData.emit(data);
    }

    // below 5 lines of code is for AMR `Drug Seller Performance Report` download
    // console.log(agentId);
    // console.log(this.getAgentIdForAmrReportDownload());
    let selectedAgentIDs = ''
    for (let i = 0; i < this.getAgentIdForAmrReportDownload()?.length; i++) {
      selectedAgentIDs += '&agent_ids=' + this.getAgentIdForAmrReportDownload()[i];
    }
    localStorage.setItem('selectedAgentIDs', selectedAgentIDs);
  }


  getAgentIdForAmrReportDownload() {
    let ids: any = [];
    if (this.selectedTerritory) {
      ids = [];
      ids.push(this.selectedTerritory)
      return ids;
    }
    if (this.selectedArea && !this.selectedTerritory) {
      ids = [];
      ids.push(this.selectedArea)
      return ids;
    }
    if (this.selectedRegion && !this.selectedArea && !this.selectedTerritory) {
      ids = [];
      ids.push(this.selectedRegion)
      return ids;
    }
    if (this.selectedZone && !this.selectedRegion && !this.selectedArea && !this.selectedTerritory) {
      ids = [];
      ids.push(this.selectedZone)
      return ids;
    }
    if (!this.selectedZone && !this.selectedRegion && !this.selectedArea && !this.selectedTerritory) {
      ids = [];
      ids.push(Number(localStorage.getItem(Localstorage.KEYS.id)))
      return ids;
    }
  }

  onOpenCalendar(container: any) {
    container.monthSelectHandler = (event: any): void => {
      container._store.dispatch(container._actions.select(event.date));
    };
    container.setViewMode('month');
  }


  clearSubAgents(type: string, deleted: boolean = false) {
    if (deleted) {
      // console.log(type);
      if (type === 'SSK_REGION') {
        this.region = [];
        this.area = [];
        this.territory = [];

        this.selectedRegion = [];
        this.selectedArea = [];
        this.selectedTerritory = [];
      } else if (type === 'SSK_AREA') {
        this.area = [];
        this.territory = [];

        this.selectedArea = [];
        this.selectedTerritory = [];
      } else if (type === 'SSK_TERRITORY') {
        this.territory = [];

        this.selectedTerritory = [];
      }
    }
  }

  onChangeSelector(agentIds: any, type: string) {
    // console.log(agentIds);
    if (typeof agentIds == "number") {
      agentIds = [agentIds]
    } else if (typeof agentIds == "object") {
      //do nothing
    }

    // @ts-ignore
    if (agentIds[0] === [-1] && agentIds[1] === undefined) {
      for (let i = 1; i < this.zone[i]?.id; i++) {
        agentIds.push(this.zone[i].id);
      }
    }
    // @ts-ignore
    if (agentIds[0] === [-2] && agentIds[1] === undefined) {
      for (let i = 1; i < this.region[i]?.id; i++) {
        agentIds.push(this.region[i].id);
      }
    }
    // @ts-ignore
    if (agentIds[0] === [-3] && agentIds[1] === undefined) {
      for (let i = 1; i < this.area[i]?.id; i++) {
        agentIds.push(this.area[i].id);
      }
    }
    // @ts-ignore
    if (agentIds[0] === [-4] && agentIds[1] === undefined) {
      for (let i = 1; i < this.territory[i]?.id; i++) {
        agentIds.push(this.territory[i].id);
      }
    }

    if (agentIds.length > 0) {
      this.requestSubmitted = true;
      this.selectorService.getSubAgents(agentIds, type).subscribe((res: any) => {
        if (type === 'SSK_ZONE') {
          this.zone = res?.content;
          this.zone = this.zone.sort((a: { name: string; }, b: { name: any; }) => a.name.localeCompare(b.name));
          this.zoneIds = this.zone.map((r: any) => r.id);
          this.zone.splice(0, 0, {id: -1, name: 'All'});
        } else if (type === 'SSK_REGION') {
          this.selectedRegion = undefined;
          this.selectedArea = undefined;
          this.selectedTerritory = undefined;

          this.region = res?.content;
          this.region = this.region.sort((a: { name: string; }, b: { name: any; }) => a.name.localeCompare(b.name));
          this.regionIds = this.region.map((r: any) => r.id);
          this.region.splice(0, 0, {id: -2, name: 'All'});
        } else if (type === 'SSK_AREA') {
          this.selectedArea = undefined;
          this.selectedTerritory = undefined;

          this.area = res?.content;
          this.area = this.area.sort((a: { name: string; }, b: { name: any; }) => a.name.localeCompare(b.name));
          this.areaIds = this.area.map((r: any) => r.id);
          this.area.splice(0, 0, {id: -3, name: 'All'});
        } else if (type === 'SSK_TERRITORY') {
          this.selectedTerritory = undefined;

          this.territory = res?.content;
          this.territory = this.territory.sort((a: { name: string; }, b: {
            name: any;
          }) => a.name.localeCompare(b.name));
          this.territoryIds = this.territory.map((r: any) => r.id);
          this.territory.splice(0, 0, {id: -4, name: 'All'});
        }
        this.requestSubmitted = false;

      }, error => this.requestSubmitted = false)
    }
  }
}
