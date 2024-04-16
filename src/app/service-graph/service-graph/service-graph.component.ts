import {Component, OnInit} from '@angular/core';
import {ConstantsService} from "../../shared/common/constants.service";
import {GraphService} from "../../services/graph.service";
import {GraphResponseModel} from "../../models/GraphResponseModel";
import {ToastrService} from "ngx-toastr";
import {AuthenticationService} from "../../shared/common/authentication.service";

@Component({
  selector: 'app-service-graph',
  templateUrl: './service-graph.component.html',
  styleUrls: ['./service-graph.component.scss']
})
export class ServiceGraphComponent implements OnInit {
  serviceTypes: any[] = localStorage.getItem('userType') === 'AMR' ? ConstantsService.SERVICES_FOR_AMR : ConstantsService.SERVICES;
  selectedService: any[] = localStorage.getItem('userType') === 'AMR' ? ['1'] : ['TELEMEDICINE'];
  // selectedService: any[] = localStorage.getItem('userType') === 'AMR' ? ['USER_WITH_PRESCRIPTION'] : ['TELEMEDICINE'];
  // selectedService: any[] = ['1'];
  serviceData: GraphResponseModel | undefined;
  dataLoaded: boolean = false;
  eventData: any;
  userTypeAMR: boolean = localStorage.getItem('userType') === 'AMR';

  constructor(private service: GraphService ,private auth:AuthenticationService) {
  }

  ngOnInit(): void {
  }

  getGraphData(event: any) {
    console.log(event);
    this.eventData = event;
    if (this.service.monthDiffMoreThan13(new Date(event.startDate), new Date(event.endDate))) {
      // this.toast.warning("You have selected more than 13 months");
      window.alert("You have selected more than 13 months");
      return;
    }
    this.dataLoaded = false;
    this.service.getGraphData(this.eventData,event.startDate,event.endDate,event.agentId,this.auth.getManufacturerName(), this.selectedService,).subscribe((res: GraphResponseModel) => {
      this.serviceData = res;
      this.dataLoaded = true;
    }, error => this.dataLoaded = false)
  }


  isVisible(type: string) {
    if (this.selectedService.includes('1')) {
      return true;
    } else
      return this.selectedService.includes(type)
  }

  onChange() {
    this.selectedService = this.onAgentSelection(this.selectedService);
    this.getGraphData(this.eventData);

  }

  onAgentSelection(values: any) {
    if (values.length === 1) {
      return values;
    } else if (values.length === 0) {
      return ['1'];
    } else if (values[0] != '1' && values?.includes('1')) {
      return ['1'];
    } else {
      return values.filter((id: any) => id !== '1');
    }
  }


  clearServices() {
    this.selectedService = ['1'];
    this.getGraphData(this.eventData);
  }
}
