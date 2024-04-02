import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Personnel } from '../Personnel';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class PersonnelService {

  private apiUrlPersonnel = 'http://localhost/api/personnel.php';

  constructor(private http: HttpClient) { }

  //Post
  createPersonnel(data:any){
    return this.http.post<any>(this.apiUrlPersonnel, data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  //Get
  getPersonnels(){
    return this.http.get<any>(this.apiUrlPersonnel)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  getPersonnel(id: number){
    return this.http.get<any>(`${this.apiUrlPersonnel}?personnelId=${id}`)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  //Delete
  deletePersonnel(id: number){
    return this.http.delete<any>(`${this.apiUrlPersonnel}?personnelId=${id}`)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  //Put
  updatePersonnel(data:any,id:number){
    return this.http.put<any>(`${this.apiUrlPersonnel}?personnelId=${id}`, data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
}