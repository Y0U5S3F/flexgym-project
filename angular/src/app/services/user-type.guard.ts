import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminUserTypeGuard implements CanActivate {
    constructor(private router: Router) {}
  
    canActivate(
      next: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const userData = JSON.parse(localStorage.getItem('userData') as string);
      if (userData && (userData.userType === 'Mv1NpnIV')) {
        return true;
      } else {
        this.router.navigate(['/login']);
        return false;
      }
    }
  }

@Injectable({
    providedIn: 'root'
})
export class PersonnelUserTypeGuard implements CanActivate {
    constructor(private router: Router) {}

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        const userData = JSON.parse(localStorage.getItem('userData') as string);
        if (userData && (userData.userType === 'X12nDlxf' || userData.userType === 'Mv1NpnIV')) {
            return true;
        } else {
            this.router.navigate(['/login']);
            return false;
        }
    }
}

@Injectable({
    providedIn: 'root'
})
export class RegularUserTypeGuard implements CanActivate {
        constructor(private router: Router) {}
    
        canActivate(
            next: ActivatedRouteSnapshot,
            state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
            const userData = JSON.parse(localStorage.getItem('userData') as string);
            if (userData && userData.userType === '0rxQHAxT') {
                return true;
            } else {
                this.router.navigate(['/login']);
                return false;
            }
        }
}