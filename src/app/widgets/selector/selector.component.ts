import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrl: './selector.component.scss'
})
export class SelectorComponent {
  userTypeAMR:boolean=true;
  requestSubmitted:boolean=true;
  y = new Date().getFullYear();
  m =new Date().getMonth();
  @Input() monthOnly:boolean=false;
  maxStartDate: Date= new Date();
  startDate: any = new Date(this.y,this.m,1);
  minDate: Date = this.startDate;
  maxEndDate: Date | undefined;
  endDate: any;
  @Output() filterData = new EventEmitter<unknown>();

  selectStartDate() {

  }

  selectEndDate() {

  }

  onOpenCalendar($event: unknown) {

  }
}
