import { Injectable } from '@angular/core';
import {AuthenticationService} from "../common/authentication.service";
import {ToastrService} from "ngx-toastr";

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor(private authenticationService: AuthenticationService, private toastrService: ToastrService) { }

  handleError(error: any) {
    if (error.status === 401) {
      this.authenticationService.refreshToken();
    } else if (error.status >= 500 || error.status === 0) {
      this.toastrService.error('Internal Server Error');
    } else if (error.status > 400 && error.status < 500) {
      this.authenticationService.logout();
    }
  }
}
