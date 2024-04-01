import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthenticationService} from "../../shared/common/authentication.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  type: string = 'password';
  hide: boolean = false;
  marked = true;
  password?: string;
  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  constructor(private authService: AuthenticationService, private router: Router) {
  }

  ngOnInit(): void {
    this.clearCookies();
    // console.log(this.authService.getAccessToken());
    // this.loginBoxCssHandle();
    if (this.authService.getAccessToken() && this.authService.getAccessToken() != '') {
      this.router.navigate(['/dashboard']);
    }
  }

  hidePassword(hide: string) {
    if (hide == 'hide') {
      this.type = 'text';
      this.hide = true;
    } else if (hide == 'show') {
      this.type = 'password';
      this.hide = false;
    }
  }

  loggedIn(value: any) {
    console.log(655)
    this.authService.login(value.username, value.password);

  }

  clearCookies() {
    const cookies = document.cookie.split(";");

    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i];
      const eqPos = cookie.indexOf("=");
      const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;
    }
  }
}
