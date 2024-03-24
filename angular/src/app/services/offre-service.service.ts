import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Offre } from '../Offre';

@Injectable({
  providedIn: 'root'
})

export class OffreService {

  constructor(private httpClient: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
  
  getOffers(): Observable<Offre[]>{
    return this.httpClient.get<Offre[]>('http://localhost/api/offre.php/', {headers: this.httpOptions.headers});
  }
}
