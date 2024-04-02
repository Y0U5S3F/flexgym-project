import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Abonnement } from '../Abonnement';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class AbonnementService {

  private apiUrlAbonnement = 'http://localhost/api/abonnement.php';

  constructor(private http: HttpClient) { }

  //Post
  createAbonnement(data:any){
    return this.http.post<any>(this.apiUrlAbonnement, data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  //Get
  getAbonnements(){
    return this.http.get<any>(this.apiUrlAbonnement)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  getAbonnement(id: number){
    return this.http.get<any>(`${this.apiUrlAbonnement}?abonnementId=${id}`)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  //Delete
  deleteAbonnement(id: number){
    return this.http.delete<any>(`${this.apiUrlAbonnement}?abonnementId=${id}`)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  //Put
  updateAbonnement(data:any,id:number){
    return this.http.put<any>(`${this.apiUrlAbonnement}?abonnementId=${id}`, data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
}