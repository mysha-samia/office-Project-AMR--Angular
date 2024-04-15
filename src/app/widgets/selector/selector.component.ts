import {Component, EventEmitter, OnInit, Output, Input} from '@angular/core';
import {SelectorService} from "../../services/selector.service";
import {AuthenticationService} from "../../shared/common/authentication.service";
import {Localstorage} from "../../shared/common/localstorage";

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.scss']
})
export class SelectorComponent implements OnInit {

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
  drugSeller:any;
  drugSellerIds:any;

  selectedDrugSeller: any;
  selectedTerritory: any;
  selectedArea: any;
  selectedRegion: any;
  selectedZone: any;
  requestSubmitted: boolean = true;

  multipleSelect:boolean = true;
  userTypeAMR: boolean = true;

  @Output() filterData = new EventEmitter();

  @Input() monthOnly: boolean = false;

  @Input() isReport: boolean = false;


  constructor(private selectorService: SelectorService, private auth: AuthenticationService) {
  }

  ngOnInit(): void {
    this.userTypeAMR = localStorage.getItem('userType') === 'AMR';
    this.multipleSelect = window.location.pathname != '/reports';

    if (localStorage.getItem(Localstorage.KEYS.id) === null) {
      this.auth.__agentId.subscribe((agentId: any) => {
        if (agentId) {
          this.getSubAgents([agentId], this.userTypeAMR ? 'SSK_AREA' : 'SSK_ZONE', false);
        }
      });
    } else this.getSubAgents(this.selectorService.getAgentIdFromStorage(), this.userTypeAMR ? 'SSK_AREA' : 'SSK_ZONE', false);
    this.getSelectorValues(false);
  }

  getSubAgents(agentIds: any, type: string, filtered: boolean = true, deleted: boolean = false) {
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
          this.region.splice(0, 0, {id: -1, name: 'All'});
        } else if (type === 'SSK_AREA') {
          this.area = res?.content;
          this.area = this.area.sort((a: { name: string; }, b: { name: any; }) => a.name.localeCompare(b.name));
          this.areaIds = this.area.map((r: any) => r.id);
          this.area.splice(0, 0, {id: -1, name: 'All'});
        } else if (type === 'SSK_TERRITORY') {
          this.territory = res?.content;
          console.log(this.territory);
          this.territory = this.territory.sort((a: { name: string; }, b: { name: any; }) => a.name.localeCompare(b.name));
          this.territoryIds = this.territory.map((r: any) => r.id);
          this.territory.splice(0, 0, {id: -1, name: 'All'});
        }else if (type === 'SSK_NON_TRANSACTIONAL_AGENT') {
          this.drugSeller = res?.content;
          this.drugSeller = this.drugSeller.sort((a: { name: string; }, b: { name: any; }) => a.name.localeCompare(b.name));
          this.drugSellerIds = this.drugSeller.map((r: any) => r.id);
          this.drugSeller.splice(0, 0, {id: -1, name: 'All'});
        }
        this.requestSubmitted = false;

      }, (error:any) => this.requestSubmitted = false)
    }
  }

  // for distributor
  onAddTerritory(agentIds: any, deleted: boolean = false) {
    // this.clearSubAgents('', deleted);
    this.changeValueForAll(this.onAgentSelection(agentIds), '', deleted);
  }

  // for AMR
  onAddDrugSellerForAMR(agentIds: any, deleted: boolean = false) {
    this.selectedDrugSeller = this.selectedDrugSeller.includes(-1) ? [-1] : this.selectedDrugSeller;
    // this.clearSubAgents('', deleted);
    this.changeValueForAllForAMR(this.onAgentSelection(agentIds), '', deleted);
  }

  onAgentSelection(values: any) {
    if (values.length === 1) {
      return values;
    } else if (values.length === 0) {
      return [-1];
    } else if (values[0] != -1 && values.includes(-1)) {
      return [-1];
    } else {
      return values.filter((id: any) => id !== -1);
    }
  }

  // changeValueForAll for distributor
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

  // changeValueForAll for AMR
  changeValueForAllForAMR(ids: any, type: string, deleted: boolean) {
    if (ids && ids[0] === -1) {
      switch (type) {
        case ('SSK_TERRITORY'):
          if (!deleted) this.selectedArea = ids;
          return this.areaIds;
        default:
          // if (!deleted) this.selectedDrugSeller = ids;
          return this.drugSellerIds;
      }
    } else {
      switch (type) {
        case ('SSK_TERRITORY'):
          this.selectedArea = ids;
          break;
        case ('SSK_NON_TRANSACTIONAL_AGENT'):
          this.selectedTerritory = ids;
          break;
        default:
          this.selectedDrugSeller = ids;
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

  // get selected values for distributor
  getSelectorValues(filtered: boolean = true) {
    let agentId;
    if (filtered) {
      agentId = this.selectorService.getAgentId(
        this.changeValueForAll(this.selectedZone, 'SSK_REGION', false),
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
      // console.log(data);

    }
  }

  // get selected values for AMR
  getSelectorValuesForAMR(filtered: boolean = true) {
    let agentId;
    if (filtered) {
      agentId = this.selectorService.getAgentIdForAMR(
        this.changeValueForAllForAMR(this.selectedArea, 'SSK_TERRITORY', false),
        this.changeValueForAllForAMR(this.selectedTerritory, 'SSK_NON_TRANSACTIONAL_AGENT', false),
        this.changeValueForAllForAMR(this.selectedDrugSeller, '', false));
    } else {
      agentId = this.selectorService.getAgentIdForAMR(this.selectedArea, this.selectedTerritory, this.selectedDrugSeller);
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
        'areaId': this.selectedArea,
        'territoryId': this.selectedTerritory,
        'drugSellerId': this.selectedDrugSeller,
      }
      // console.log(data);
      this.filterData.emit(data);

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

  removeDrugSellerForAMR() {
    // this.selectedDrugSeller = this.selectedTerritory;
    this.selectedDrugSeller = null;
  }
}
