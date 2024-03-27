import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Offre } from '../Offre';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class OffreService {

  private apiUrlOffre = 'http://localhost/api/offre.php';
  private apiUrlCour = 'http://localhost/api/cour.php';
  private apiUrlPersonnel = 'http://localhost/api/personnel.php';
  private apiUrlClient = 'http://localhost/api/client.php';



  constructor(private http: HttpClient) { }

  //Post
  createOffre(data:any){
    return this.http.post<any>(this.apiUrlOffre, data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  //Get
  getOffres(){
    return this.http.get<any>(this.apiUrlOffre)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  getCours(){
    return this.http.get<any>(this.apiUrlCour)
    .pipe(map((res:any)=>{
      return res; 
    }))
  }

  getOffre(id: number){
    return this.http.get<any>(`${this.apiUrlOffre}?offreId=${id}`)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  //Delete
  deleteOffre(id: number){
    return this.http.delete<any>(`${this.apiUrlOffre}?offreId=${id}`)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  //Put
  updateOffre(data:any,id:number){
    return this.http.put<any>(`${this.apiUrlOffre}?offreId=${id}`, data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
}