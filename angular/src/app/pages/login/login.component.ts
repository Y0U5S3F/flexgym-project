import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth-service.service';
import { Login,DecodedToken } from '../../Login';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formValue!: FormGroup;
  loginObject: Login = new Login();

  constructor(private api: AuthService, private formbuilder: FormBuilder, private router: Router) { 
    console.log("LoginComponent constructor called");
  }

  ngOnInit(): void {
    console.log("LoginComponent ngOnInit called");
    this.formValue = this.formbuilder.group({
      email: [''],
      pass: ['']
    });
  }

  LoginRes() {
    this.loginObject.email = this.formValue.get('email')?.value;
    this.loginObject.pass = this.formValue.get('pass')?.value;
    
    this.api.login(this.loginObject.email, this.loginObject.pass).subscribe(
      (res: any) => {
        console.log("Login response received:", res);
        if (!res.token) {
          console.error('No token in response');
          return;
        }
        const userData = JSON.parse(localStorage.getItem('userData') || '{}');
        const userType = userData.userType;
        if (userType === 'X12nDlxf' || userType === 'Mv1NpnIV') {
          console.log('Redirecting to offreAdmin');
          this.router.navigate(['/offreAdmin']);
        } else if (userType === '0rxQHAxT') {
          console.log('Redirecting to Profile');
          this.router.navigate(['/profile']);
        } else {
          alert("email or password incorrect")
        }
      },
      err => {
        console.error('Error:', err);
      }
    );
  }

}