import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Import the Router module


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private router: Router) {} // Inject the Router module

  logout() {
    localStorage.removeItem('userData');
    this.router.navigate(['/']);
  }

}
