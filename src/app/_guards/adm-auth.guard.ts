import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { LoginService } from '../_services/login.service';

@Injectable()
export class AdmAuthGuard implements CanActivate {

  constructor(private loginService: LoginService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if (this.loginService.isAdmLogged()) {
      return true;
    }

    // if (this.loginService.isCollectorLogged()) {
    //   this.router.navigate(['/mapa']);
    //   return false;
    // }

    this.router.navigate(['/login']);
    return false;
  }
}
