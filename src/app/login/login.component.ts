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
  loading = false;

  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.loginService.logout();
  }

  login() {
    this.loading = true;
    this.loginService.login(this.user).subscribe(credential => {
      if (this.user.typeOfUser === 'adm') {
        this.loginService.createAdmSession(credential);
        this.loading = false;
      } else {
        this.loginService.createCollectorSession(credential);
        this.loading = false;
      }
    }, error => {
      this.alertMessage = error._body;
      this.loading = false;
    });
  }

}
