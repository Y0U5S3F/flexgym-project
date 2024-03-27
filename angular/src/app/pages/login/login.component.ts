import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { Login } from '../../Login'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {  
  loginData: any;
  formValue: FormGroup = new FormGroup({});
  loginObject: Login = new Login();
  selectOptions: { value: string, label: string }[] = [];

  constructor(private api: LoginService, private formbuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      email: [''],
      pass: [''],
      userType: ['']
    });
  }

LoginRes() {
  this.loginObject.email = this.formValue.get('email')?.value;
  this.loginObject.pass = this.formValue.get('pass')?.value;
  
  this.loginObject.email = this.formValue.value.emailInput;
  this.loginObject.pass = this.formValue.value.passInput;
  this.loginObject.userType = this.formValue.value.userType;

  this.api.LoginRes(this.loginObject).subscribe(
    res => {
      this.loginData = res;
      console.log(this.loginData.userType); // Check the returned userType
      if (this.loginData.userType === 'X12nDlxf') {
        this.router.navigate(['/offreAdmin']); // Use navigate method with array argument
      }
    },
    err => {
      console.error(err); // Check for any errors
    }
  )
}
}