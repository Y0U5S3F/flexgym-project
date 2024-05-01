import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AdminUserTypeGuard {
  canActivate = (
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree => {
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

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private router: Router) {}
}

@Injectable({
  providedIn: 'root'
})
export class PersonnelUserTypeGuard {
  canActivate = (
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree => {
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

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private router: Router) {}
}

@Injectable({
  providedIn: 'root'
})
export class RegularUserTypeGuard {
  canActivate = (
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree => {
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

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private router: Router) {}
}