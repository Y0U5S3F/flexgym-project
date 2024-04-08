import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-home',
  templateUrl: './header-home.component.html',
  styleUrls: ['./header-home.component.css']
})
export class HeaderHomeComponent {
  constructor(private router: Router) {}

  getUserData() {
    const userData = JSON.parse(localStorage.getItem('userData') as string);
    return userData && userData.userType ? userData : null;
  }

  logout() {
    localStorage.removeItem('userData');
    this.router.navigate(['/']);
  }
}