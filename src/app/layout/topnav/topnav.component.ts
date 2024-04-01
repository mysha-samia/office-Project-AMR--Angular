import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../../shared/common/authentication.service";
import {Localstorage} from "../../shared/common/localstorage";

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrl: './topnav.component.scss'
})
export class TopnavComponent implements OnInit {
  constructor(private authenticationService:AuthenticationService){

  }
  ngOnInit() {

  }
  logout(){
    this.authenticationService.logout();
  }

  getCompanyName() {
    return localStorage.getItem(Localstorage.KEYS.name) ?? '';

  }


}
