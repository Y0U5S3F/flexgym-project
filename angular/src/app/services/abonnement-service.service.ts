import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Abonnement } from '../Abonnement';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class AbonnementService {

  private apiUrlAbonnement = 'http://localhost/api/abonnement.php';

  constructor(private http: HttpClient) { }

  createAbonnement(data:any){
    const headers = new HttpHeaders().set('token', `${localStorage.getItem('token')}`);
    return this.http.post<any>(this.apiUrlAbonnement, data, { headers })
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  getAbonnements(){
    const headers = new HttpHeaders().set('token', `${localStorage.getItem('token')}`);
    return this.http.get<any>(this.apiUrlAbonnement, { headers })
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  getAbonnement(id: number){
    const headers = new HttpHeaders().set('token', `${localStorage.getItem('token')}`);
    return this.http.get<any>(`${this.apiUrlAbonnement}?abonnementId=${id}`, { headers })
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  deleteAbonnement(id: number){
    const headers = new HttpHeaders().set('token', `${localStorage.getItem('token')}`);
    return this.http.delete<any>(`${this.apiUrlAbonnement}?abonnementId=${id}`, { headers })
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  updateAbonnement(data:any,id:number){
    const headers = new HttpHeaders().set('token', `${localStorage.getItem('token')}`);
    return this.http.put<any>(`${this.apiUrlAbonnement}?abonnementId=${id}`, data, { headers })
    .pipe(map((res:any)=>{
      return res;
    }))
  }
}