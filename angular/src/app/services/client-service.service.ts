import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from '../Client';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ClientService {

 private apiUrlClient = 'http://localhost/api/client.php';

  constructor(private http: HttpClient) { }

  //Post
  createClient(data:any){
    return this.http.post<any>(this.apiUrlClient, data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  //Get
  getClients(){
    return this.http.get<any>(this.apiUrlClient)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  getClient(id: number){
    return this.http.get<any>(`${this.apiUrlClient}?clientId=${id}`)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  //Delete
  deleteClient(id: number){
    return this.http.delete<any>(`${this.apiUrlClient}?clientId=${id}`)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  //Put
  updateClient(data:any,id:number){
    return this.http.put<any>(`${this.apiUrlClient}?clientId=${id}`, data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
}