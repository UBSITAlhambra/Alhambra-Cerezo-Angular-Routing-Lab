import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
providedIn: 'root'
})
export class AdminGuard implements CanActivate {
constructor(private authService: AuthService, private router: Router) {}
canActivate(
route: ActivatedRouteSnapshot,
state: RouterStateSnapshot): Observable<boolean | UrlTree> |
Promise<boolean | UrlTree> | boolean | UrlTree {
if (this.authService.isAdmin()) {
return true; // User is an admin, allow access
} else {
this.router.navigate(['/']);
return false;
}
}
}