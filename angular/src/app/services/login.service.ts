import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from '../Login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl = 'http://localhost:80/api/login.php';

  constructor(private http: HttpClient) { }

  LoginRes(data: Login): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }
}