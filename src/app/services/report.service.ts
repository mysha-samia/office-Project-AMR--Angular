import { Injectable } from '@angular/core';
import {AuthenticationService} from "../shared/common/authentication.service";
import {HttpClient} from "@angular/common/http";
import {ApiEndPointsService} from "../shared/common/api-end-points.service";

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private auth:AuthenticationService,private http:HttpClient,private apiEndpoints:ApiEndPointsService) { }
}
