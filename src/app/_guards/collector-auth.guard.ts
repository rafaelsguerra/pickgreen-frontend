import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {LoginService} from '../_services/login.service';

@Injectable()
export class CollectorAuthGuard implements CanActivate {

  constructor(private loginService: LoginService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if (this.loginService.isCollectorLogged()) {
      return true;
    }
    //
    // if (this.loginService.isAdmLogged()) {
    //   this.router.navigate(['/painel']);
    //   return false;
    // }

    this.router.navigate(['/login']);
    return false;
  }
}
