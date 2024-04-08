import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';
import { jwtDecode } from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private apiUrlLogin = 'http://localhost/api/login/JWTlogin.php';

  constructor(private http: HttpClient) { }

  login(email: string, pass: string): Observable<any> {
    return this.http.post<any>(this.apiUrlLogin, { email, pass })
      .pipe(
        map((res: any) => {
          if (res === null) {
            throw new Error('Response from API is null');
          }
          return res;
        }),
        tap((res: any) => {
          if (res && res.token) {
            const decodedToken = jwtDecode<any>(res.token);
            const userData = {
              id: decodedToken.data.id,
              email: decodedToken.data.email,
              userType: decodedToken.data.userType
            };
            localStorage.setItem('userData', JSON.stringify(userData));
          } else {
          }
        }),
        catchError((error: any) => {
          console.error('Error:', error);
          return throwError(error);
        })
      );
  }
}