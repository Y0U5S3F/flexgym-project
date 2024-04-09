import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminUserTypeGuard implements CanActivate {
    constructor(@Inject(PLATFORM_ID) private platformId: Object,private router: Router) {}
  
    canActivate(
      next: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let userData;
      if (isPlatformBrowser(this.platformId)) {
        userData = JSON.parse(localStorage.getItem('userData') as string);
      }
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
    constructor(@Inject(PLATFORM_ID) private platformId: Object, private router: Router) {}

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        let userData;
        if (isPlatformBrowser(this.platformId)) {
          userData = JSON.parse(localStorage.getItem('userData') as string);
        }
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
        constructor(@Inject(PLATFORM_ID) private platformId: Object, private router: Router) {}
    
        canActivate(
            next: ActivatedRouteSnapshot,
            state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
            let userData;
            if (isPlatformBrowser(this.platformId)) {
              userData = JSON.parse(localStorage.getItem('userData') as string);
            }
            if (userData && userData.userType === '0rxQHAxT') {
                return true;
            } else {
                this.router.navigate(['/login']);
                return false;
            }
        }
}