import {Component, Input} from '@angular/core';

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

  selectStartDate() {

  }

  selectEndDate() {
    
  }

  onOpenCalendar($event: unknown) {
    
  }
}
