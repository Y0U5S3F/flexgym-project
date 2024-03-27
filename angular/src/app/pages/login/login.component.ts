import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { Login } from '../../Login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formValue!: FormGroup;
  loginObject: Login = new Login();

  constructor(private api: LoginService, private formbuilder: FormBuilder, private router: Router) { 
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
    console.log("LoginRes called");
    this.loginObject.email = this.formValue.get('email')?.value;
    this.loginObject.pass = this.formValue.get('pass')?.value;

    this.api.LoginRes(this.loginObject).subscribe(
      (res: any) => {
        console.log("Login response received:", res);
        if (res.userType === 'X12nDlxf') {
          console.log('Redirecting to offreAdmin');
          this.router.navigate(['/offreAdmin']);
        }else{
          alert("email ou pass incorrect")
        }
      },
      err => {
        console.error('Error:', err);
      }
    );
  }
}