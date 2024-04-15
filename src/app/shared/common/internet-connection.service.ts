import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class InternetConnectionService {
  public isConnectedWithInternet = new BehaviorSubject<boolean>(true);
  constructor() { }
}
