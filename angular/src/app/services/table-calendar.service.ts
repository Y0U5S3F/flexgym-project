
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TableCalendarService {
  private apiUrlCalendar = 'http://localhost/api/calendrier.php'; 

  constructor(private http: HttpClient) { }

  //Post
  createActivite(data:any){
    return this.http.post<any>(this.apiUrlCalendar, data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  //Get
  getActivites(){
    return this.http.get<any>(this.apiUrlCalendar)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  getActivite(id: number){
    return this.http.get<any>(`${this.apiUrlCalendar}?activiteId=${id}`)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  //Delete
  deleteActivite(id: number){
    return this.http.delete<any>(`${this.apiUrlCalendar}?activiteId=${id}`)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  //Put
  updateActivite(data:any,id:number){
    return this.http.put<any>(`${this.apiUrlCalendar}?activiteId=${id}`, data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
}