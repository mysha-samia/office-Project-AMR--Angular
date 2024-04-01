import { Component } from '@angular/core';
import{AuthenticationService} from "./shared/common/authentication.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(private authenticationService:AuthenticationService) {
  }
  isLoggedIn(): boolean {
    return this.authenticationService.isLoggedIn();
  }
}
