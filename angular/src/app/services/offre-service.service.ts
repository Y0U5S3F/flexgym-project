import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Offre } from '../Offre';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class OffreService {

  private apiUrl = 'http://localhost:3000/posts';

  constructor(private http: HttpClient) { }

  //Post
  createOffre(data:any){
    return this.http.post<any>(this.apiUrl, data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  //Get
  getOffre(){
    return this.http.get<any>(this.apiUrl)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  //Delete
  deleteOffre(id: number){
    return this.http.delete<any>(`${this.apiUrl}/id`)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  //Put
  updateOffre(data:any,id:number){
    return this.http.put<any>(`${this.apiUrl}/id`, data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

}



// export class OffreService {

//   private apiUrl = 'http://your-api-url';

//   constructor(private http: HttpClient) { }

//   getOffres(): Observable<Offre[]> {
//     const url = `${this.apiUrl}`;
//     return this.http.get<Offre[]>(url);
//   }

//   updateOffre(offre: Offre): Observable<Offre> {
//     const url = `${this.apiUrl}${offre.offreId}`;
//     return this.http.put<Offre>(url, offre);
//   }

//   createOffre(offre: Offre): Observable<Offre> {
//     const url = `${this.apiUrl}`;
//     return this.http.post<Offre>(url, offre);
//   }

//   deleteOffre(offreId: number): Observable<void> {
//     const url = `${this.apiUrl}${offreId}`;
//     return this.http.delete<void>(url);
//   }
// }
