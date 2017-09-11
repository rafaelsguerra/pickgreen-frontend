import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

import 'rxjs/add/operator/map';

export class FinalUser {
  pin: string;
  constructor() {};
}

@Injectable()
export class LoginService {

  ApiUrl = 'http://pick-green-api.herokuapp.com/';

  constructor(private router: Router, private http: Http ) { }

  login(user: FinalUser) {
    const pin = {pin: user.pin};
    const url = this.ApiUrl + 'admApi/auth/';

    return this.http.post(url, pin);
  }

  createSession(pin) {
    window.sessionStorage.setItem('user', pin);
    this.router.navigate(['/painel']);
  }

  logout() {
    if (!window.sessionStorage.getItem('user') === null) {
      window.sessionStorage.clear();
      this.router.navigate(['/login']);
    }
  }

}
