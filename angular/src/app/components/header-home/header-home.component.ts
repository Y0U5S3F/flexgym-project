import { Router } from '@angular/router';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-header-home',
  templateUrl: './header-home.component.html',
  styleUrls: ['./header-home.component.css']
})
export class HeaderHomeComponent {
  constructor(private router: Router, @Inject(PLATFORM_ID) private platformId: Object) {}

  getUserData() {
    if (isPlatformBrowser(this.platformId)) {
      const userData = JSON.parse(localStorage.getItem('userData') as string);
      return userData && userData.userType ? userData : null;
    }
    return null;
  }

  logout() {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('userData');
    }
    this.router.navigate(['/']);
  }
}