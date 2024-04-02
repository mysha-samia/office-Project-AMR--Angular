import {Injectable} from '@angular/core';
import {AuthenticationService} from "../shared/common/authentication.service";
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";
import {catchError, Observable, throwError} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class ErrorInterceptorService implements HttpInterceptor {

  constructor(private toast: ToastrService, private auth: AuthenticationService, private router: Router) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          this.handleError(error);
          console.log(error);
          let errorMsg = '';
          if (error.error instanceof ErrorEvent) {
            errorMsg = `Error: ${error.error.message}`;
          } else {
            errorMsg = `Error Code: ${error.status},Message:${error.message}`;
          }
          return throwError(errorMsg);
        })
      );
  }


  private handleError(error: HttpErrorResponse) {
   if(error.status === 400){
     this.toast.error(error.message,"Bad Request")
   } else if(error.status ===401){
     this.toast.error("","Token Expired");
     this.auth.logout();
   }else if(error.status===417){
     this.toast.error(error.message,"Request Error")
   }else if(error.status>=500){
     this.toast.error("please contact with support team","Data Fetching Error")
   }else {
     this.toast.error(error?.message,error?.message)
   }
  }
}
