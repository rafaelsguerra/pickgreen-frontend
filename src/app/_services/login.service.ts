import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

import 'rxjs/add/operator/map';

export class FinalUser {
  pin: string;
  typeOfUser: string;
  constructor() {};
}

@Injectable()
export class LoginService {

  ApiUrl = 'http://pick-green-api.herokuapp.com/';

  constructor(private router: Router, private http: Http ) { }

  login(user: FinalUser) {
    const pin = {pin: user.pin};
    let url = '';
    if (user.typeOfUser === 'adm') {
      url = this.ApiUrl + 'admApi/auth/';
    } else {
      url = this.ApiUrl + 'collectorApi/auth/';
    }

    return this.http.post(url, pin);
  }

  createAdmSession(credential) {
    window.sessionStorage.setItem('user', credential._body);
    this.router.navigate(['/painel']);
  }

  createCollectorSession(credential) {
    window.sessionStorage.setItem('user', credential._body);
    this.router.navigate(['/mapa']);
  }

  logout() {
    if (!window.sessionStorage.getItem('user') === null) {
      window.sessionStorage.removeItem('user');
    }
  }

}
