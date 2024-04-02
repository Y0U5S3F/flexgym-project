import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Admin } from '../Admin';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class AdminService {

  private apiUrlAdmin = 'http://localhost/api/admin.php';

  constructor(private http: HttpClient) { }

  //Post
  createAdmin(data:any){
    return this.http.post<any>(this.apiUrlAdmin, data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  //Get
  getAdmins(){
    return this.http.get<any>(this.apiUrlAdmin)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  getAdmin(id: number){
    return this.http.get<any>(`${this.apiUrlAdmin}?adminId=${id}`)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  //Delete
  deleteAdmin(id: number){
    return this.http.delete<any>(`${this.apiUrlAdmin}?adminId=${id}`)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  //Put
  updateAdmin(data:any,id:number){
    return this.http.put<any>(`${this.apiUrlAdmin}?adminId=${id}`, data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
}