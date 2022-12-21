import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanDeactivate<unknown> {
  constructor(private authService: AuthService, private router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {

    let logado = this.authService.isAuthenticated();
    if (logado == true) {
      return true
    } else {
      this.router.navigate(['/login'])
      return false
    }
  }

  canDeactivate(
    component: unknown,
  ): boolean {
    return true;
  }
}
