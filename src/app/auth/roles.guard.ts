import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class RolesGuard implements CanActivate {

  isLogged: boolean = false;

  constructor(private readonly auth: AuthService, private readonly router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this.isLogged = this.auth.isLoggedIn();
    if(this.isLogged) {
      return true;
    } else {
      this.router.navigate(['/no-auth']);
      return false;
    }
  }

}
