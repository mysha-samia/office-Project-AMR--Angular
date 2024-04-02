import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import jwt_decode from 'jwt-decode';
import {BehaviorSubject, Observable, Subject} from "rxjs";
import {Localstorage} from "./localstorage";
import {environment} from "../../../environments/environment";

// import {ToastrService} from "ngx-toastr";


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  loginCount = 0;
  count = 0;
  private _agentId = new BehaviorSubject<string>('');
  public __agentId = this._agentId.asObservable();

  private _manufacturerName = new BehaviorSubject<string>('');
  public __manufacturerName = this._manufacturerName.asObservable();
  userTypeAMR: Subject<any> = new Subject<any>();

  constructor(private http: HttpClient, private router: Router,) {
  }

  isLoggedIn(): boolean {
    if (Localstorage.retrive(Localstorage.KEYS.accessToken)) {
      return true;
    }else {
      return false;
    }
  }

  login(username: string, password: string) {
    this.loginCount++;
    const loginUrl: string = this.getLoginUrl(username, password);
    if (this.loginCount <= 1) {
      this.http.post<any>(loginUrl, null).subscribe((auth: any) => {
        localStorage.setItem(Localstorage.KEYS.accessToken, auth.access_token);
        localStorage.setItem(Localstorage.KEYS.refreshToken, auth.refresh_token);
        this.http.get(environment.base_url + environment.api_version_6 + 'agents/me?access_token=' + auth.access_token).subscribe((result: any) => {
          this.setObservableValue(result);
          Localstorage.putAuth(result);
          // decode access_token start
          try {
            // @ts-ignore
            let decodedToken: any = jwt_decode(auth.access_token);
            console.log(decodedToken?.authorities);
            if (decodedToken?.authorities?.includes('ACCESS_AMR')) {
              localStorage.setItem('userType', 'AMR');
              this.userTypeAMR.next(true);
            } else {
              localStorage.setItem('userType', 'DISTRIBUTOR');
              this.userTypeAMR.next(false);
            }
          } catch (error) {
            console.error('Failed to decode token:', error);
          }
          // decode access_token end
          this.router.navigate([`/dashboard`]);
        });
        this.loginCount = 0;
      }, error1 => {
        console.log(error1);
        this.loginCount = 0;
      });
    }
  }

  setObservableValue(data: any) {
    this._agentId.next(data.id);
    this._manufacturerName.next(data.manufacturer_name);
  }

  logout(): void {
    if (this.isLoggedIn()) {
      localStorage.clear();
      // Localstorage.clear();
      sessionStorage.clear();
    }
    this.router.navigate(['/login']);
  }

  getAccessToken(): string {
    return Localstorage.retrive(Localstorage.KEYS.accessToken) as string;
  }

  getManufacturerName(): string | null {
    return (localStorage.getItem(Localstorage.KEYS.manufacturer_name) != null) ? localStorage.getItem(Localstorage.KEYS.manufacturer_name) : '';
  }

  getRefreshToken(): string {
    return Localstorage.retrive(Localstorage.KEYS.refreshToken) as string;
  }


  getLoginUrl(username: string, password: string): string {
    return environment.base_url + '/oauth/token?grant_type=password&client_id='
      + environment.client_id + '&client_secret=' + environment.client_secret + '&username=' + username + '&password=' + password;
  }

  getRefreshTokenUrl(): string {
    return environment.base_url + '/oauth/token?grant_type=refresh_token&client_id='
      + environment.client_id + '&client_secret=' + environment.client_secret + '&refresh_token=' + this.getRefreshToken();
  }

  refreshToken() {
    const user: Observable<any> = this.http.post<any>(this.getRefreshTokenUrl(), null);
    user.subscribe((auth: any) => {
      this.count++;
      Localstorage.putAuth(auth);
      if (this.count <= 1) {
        location.reload();
      }
    }, err => {
      this.logout();
    });
  }

  parseJwt(token: any) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map((c) => {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    const obj = JSON.parse(jsonPayload);
    if (obj.authorities) {
      localStorage.setItem('authorize_array', JSON.stringify(obj.authorities));
    } else {
      localStorage.setItem('authorize_array', JSON.stringify([]));
    }
  }

}
