import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-current-date',
  templateUrl: './current-date.component.html',
  standalone: true,
  styleUrl: './current-date.component.scss'
})
export class CurrentDateComponent  implements OnInit{
  currentDate:Date = new Date();
  constructor() {
  }
  ngOnInit(): void {
  }

}
