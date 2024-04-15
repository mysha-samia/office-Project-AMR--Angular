import {Component, OnInit} from '@angular/core';
import {SskService} from "../../services/ssk.service";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-ssk',
  templateUrl: './ssk.component.html',
  styleUrls: ['./ssk.component.scss'],
  providers: [DatePipe]
})
export class SskComponent implements OnInit {

  items: any [] = [{id: '10 Items', value: 10}, {id: '20 Items', value: 20},
    {id: '50 Items', value: 50}, {id: '100 Items', value: 100}];
  item: any = 10;
  page: number = 1;
  size: number = 50;
  totalNumber: any;
  sskList: any;
  savedSelectorEvent: any;
  pagination: any;
  requestSubmitted: boolean = true;

  constructor(private sskService: SskService, private datePipe: DatePipe) {
  }

  ngOnInit(): void {
  }

  onPaginateChange(event: any) {
    this.page = event;
    this.filterData(this.savedSelectorEvent, event - 1, this.item);
  }

  filterData(event: any, page: any = this.page - 1, size: any = this.item) {
    this.requestSubmitted = true;
    this.savedSelectorEvent = event;
    this.sskService.getSskList(event, page, size).subscribe((res: any) => {
      this.sskList = res?.data;
      this.pagination = res?.pagination;
      this.requestSubmitted = false;
    }, error => this.requestSubmitted = false)
  }

  maxDateFiltering(date1: any, date2: any, date3: any) {
    let arr = [];
    arr.push(date1);
    arr.push(date2);
    arr.push(date3);
    const max = Math.max(...arr);
    return this.getDate(max);
  }

  getDate(date: any) {
    if (date == null || date == '') {
      return '';
    }
    return this.datePipe.transform(date, 'dd MMM yyyy');
  }

  onChangeListSize() {
    this.filterData(this.savedSelectorEvent, this.page - 1, this.item);
  }

  addressCheck(address: any) {
    if (address.slice(-2) == ',,') {
      return this.reverseAddress(address.slice(0, -2))
    } else if (address.slice(-1) == ',') {
      return this.reverseAddress(address.slice(0, -1))
    } else {
      return this.reverseAddress(address);
    }
  }

  reverseAddress(address: any) {
    let splitArr = address.split(',').filter(Boolean).reverse();
    let result = splitArr.join(',');
    return result;
  }

  onClickDownloadReport() {
    this.sskService.downloadSskList(this.savedSelectorEvent);
  }
}
