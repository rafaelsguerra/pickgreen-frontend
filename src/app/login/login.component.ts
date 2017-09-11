import { Component, OnInit } from '@angular/core'

import { LoginService } from '../_services/login.service';
import { FinalUser } from '../_services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: FinalUser = new FinalUser();
  alertMessage = undefined;

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  login() {
    this.loginService.login(this.user).subscribe(pin => {
      this.loginService.createSession(pin);
    }, error => {
      this.alertMessage = error._body;
    });
  }

}
