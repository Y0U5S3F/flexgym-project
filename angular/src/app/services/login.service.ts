import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from '../Login';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl = 'http://localhost/api/login.php';

  constructor(private http: HttpClient) { }

  LoginRes(data:any){
    return this.http.post<any>(this.apiUrl, data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
}
