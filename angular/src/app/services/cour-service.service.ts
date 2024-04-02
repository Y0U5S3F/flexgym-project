import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cour } from '../Cour';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class CourService {

  private apiUrlCour = 'http://localhost/api/cour.php';

  constructor(private http: HttpClient) { }

  //Post
  createCour(data:any){
    return this.http.post<any>(this.apiUrlCour, data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  //Get
  getCours(){
    return this.http.get<any>(this.apiUrlCour)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  getCour(id: number){
    return this.http.get<any>(`${this.apiUrlCour}?courId=${id}`)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  //Delete
  deleteCour(id: number){
    return this.http.delete<any>(`${this.apiUrlCour}?courId=${id}`)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  //Put
  updateCour(data:any,id:number){
    return this.http.put<any>(`${this.apiUrlCour}?courId=${id}`, data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
}