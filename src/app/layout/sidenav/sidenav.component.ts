import {Component, OnInit} from '@angular/core';
import{Localstorage} from "../../shared/common/localstorage";
import{detect} from "detect-browser";

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent implements OnInit{
  firefoxOrSafariBrowser: boolean=false;
  userType:boolean=localStorage.getItem('userType')==='AMR';
  sidebarHeight:any= '883px';
  browserName: any ='';
  constructor() {
  }

  ngOnInit(): void {
    this.sidebarDynamicCssHandle();
  }

  getCompanyImage(): string{
   // @ts-ignore
    return localStorage.getItem(Localstorage?.KEYS?.images);
  }
  sidebarDynamicCssHandle() {
    const  {detect} = require('detect-browser');
    const browser = detect();
    this.browserName = browser.name;
    if (this.browserName==='firefox' || this.browserName==='safari'){
      this.firefoxOrSafariBrowser = true;
    }else {
      this.firefoxOrSafariBrowser = false;
    }

    // if (browser.name == 'firefox' || browser.name == 'safari') {
    //   if (screen.width >= 1920) {
    //     this.sidebarHeight = '883px';
    //   } else if (screen.width <= 1366) {
    //     this.sidebarHeight = '695px';
    //   }
    // } else {
    //   // for other browser do nothing
    // }
  }
}
