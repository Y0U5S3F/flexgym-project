import { isPlatformBrowser } from '@angular/common'; // Import the isPlatformBrowser function
import { Component, Inject, PLATFORM_ID } from '@angular/core'; // Import the Inject and PLATFORM_ID tokens
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object // Inject the PLATFORM_ID token
  ) {}
  logout() {
    localStorage.removeItem('userData');
    this.router.navigate(['/']);
  }

  getUserData() {
    if (isPlatformBrowser(this.platformId)) {
      const userData = JSON.parse(localStorage.getItem('userData') as string);
      return userData && userData.userType ? userData : null;
    }
    return null;
  }

}
