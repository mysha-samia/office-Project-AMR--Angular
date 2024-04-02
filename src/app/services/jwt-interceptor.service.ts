import { Injectable } from '@angular/core';
import {AuthenticationService} from "../shared/common/authentication.service";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class JwtInterceptorService implements HttpInterceptor{

  constructor(private authenticationService:AuthenticationService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (this.authenticationService.isLoggedIn()) {
      request = request.clone({
        setHeaders: {
          'Content-Type': 'application/json; charset=utf-8',
          Authorization: `Bearer ${this.authenticationService.getAccessToken()}`
        }
      });
    }
      return next.handle(request);

  }
}
