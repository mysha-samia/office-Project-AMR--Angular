import {Component, OnInit} from '@angular/core';
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-current-date',
  templateUrl: './current-date.component.html',
  standalone: true,
  imports: [
    DatePipe
  ],
  styleUrl: './current-date.component.scss'
})
export class CurrentDateComponent  implements OnInit{
  currentDate:Date = new Date();
  constructor() {
  }
  ngOnInit(): void {
  }

}
